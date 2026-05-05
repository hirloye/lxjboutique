'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/client'
import { Plus, Trash2, Image as ImageIcon, Loader2, Edit } from 'lucide-react'
import { logout } from '@/app/admin/actions'
import { useCallback } from 'react'

type Category = 'new_arrival' | 'offer' | 'collection'

type Product = {
  id: number
  created_at: string
  title: string
  description: string
  image_url: string
  sub_category: string
  category: Category
}

export default function DashboardClient() {
  const supabase = createClient()
  const [activeTab, setActiveTab] = useState<Category>('new_arrival')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  
  // Form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [itemCategory, setItemCategory] = useState('saree')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingImageUrl, setEditingImageUrl] = useState<string | null>(null)

  const resetForm = useCallback(() => {
    setTitle('')
    setDescription('')
    setItemCategory('saree')
    setImageFile(null)
    setEditingId(null)
    setEditingImageUrl(null)
  }, [])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', activeTab)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching products:', error)
    } else {
      setProducts(data || [])
    }
    setLoading(false)
  }, [activeTab, supabase])

  useEffect(() => {
    resetForm()
    fetchProducts()
  }, [activeTab, fetchProducts, resetForm])

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) {
      alert('Title is required!')
      return
    }

    if (!editingId && !imageFile) {
      alert('Image is required for new items!')
      return
    }

    setUploading(true)

    try {
      let publicUrl = editingImageUrl

      if (imageFile) {
        // 1. Upload image
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${activeTab}/${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('lxj-images')
          .upload(filePath, imageFile)

        if (uploadError) throw uploadError

        // 2. Get public URL
        const { data } = supabase.storage
          .from('lxj-images')
          .getPublicUrl(filePath)
          
        publicUrl = data.publicUrl
      }

      if (editingId) {
        // Update existing item
        const { error: dbError } = await supabase
          .from('products')
          .update({
            title,
            description,
            sub_category: activeTab === 'offer' ? null : itemCategory,
            image_url: publicUrl,
          })
          .eq('id', editingId)

        if (dbError) throw dbError
        alert('Item updated successfully!')
      } else {
        // Insert new item
        const { error: dbError } = await supabase
          .from('products')
          .insert([
            {
              title,
              description,
              sub_category: activeTab === 'offer' ? null : itemCategory,
              image_url: publicUrl,
              category: activeTab,
            }
          ])

        if (dbError) throw dbError
        alert('Item added successfully!')
      }

      resetForm()
      fetchProducts()

    } catch (error: unknown) {
      console.error('Error saving product:', error)
      const message = error instanceof Error ? error.message : 'Error saving product'
      alert(message)
    } finally {
      setUploading(false)
    }
  }



  const handleEdit = (item: Product) => {
    setEditingId(item.id)
    setTitle(item.title)
    setDescription(item.description || '')
    if (activeTab !== 'offer' && item.sub_category) {
      setItemCategory(item.sub_category)
    }
    setEditingImageUrl(item.image_url)
    setImageFile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: number, imageUrl: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return

    try {
      // Extract path from public URL
      const urlParts = imageUrl.split('/lxj-images/')
      if (urlParts.length > 1) {
        const filePath = urlParts[1]
        await supabase.storage.from('lxj-images').remove([filePath])
      }

      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchProducts()
    } catch (error: unknown) {
      console.error('Error deleting:', error)
      alert('Error deleting item')
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary/30 border-b border-primary/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="font-heading text-2xl font-bold text-foreground">LXJ Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 border border-primary/20 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-sans text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar / Tabs */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-secondary/20 rounded-2xl p-4 flex flex-col gap-2 sticky top-28">
            <h2 className="font-sans text-sm uppercase tracking-wider text-muted-foreground font-bold mb-2 px-4">Categories</h2>
            <TabButton 
              active={activeTab === 'new_arrival'} 
              onClick={() => setActiveTab('new_arrival')}
              label="New Arrivals" 
            />
            <TabButton 
              active={activeTab === 'offer'} 
              onClick={() => setActiveTab('offer')}
              label="Offers" 
            />
            <TabButton 
              active={activeTab === 'collection'} 
              onClick={() => setActiveTab('collection')}
              label="Collection" 
            />
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          <div className="bg-secondary/10 border border-primary/10 rounded-3xl p-6 mb-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Plus className="text-primary" /> {editingId ? 'Edit' : 'Add to'} {activeTab.replace('_', ' ').toUpperCase()}
            </h2>
            
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {activeTab === 'offer' ? (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Offer Percentage (e.g. 20% OFF) *</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full p-3 bg-background border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Title *</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full p-3 bg-background border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                )}
                
                {activeTab !== 'offer' && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Item Category</label>
                    <select 
                      value={itemCategory} 
                      onChange={e => setItemCategory(e.target.value)} 
                      className="w-full p-3 bg-background border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    >
                      <option value="saree">Saree</option>
                      <option value="kurti">Kurti</option>
                      <option value="lehenga">Lehenga</option>
                      <option value="kids wear">Kids Wear</option>
                      <option value="handbags">Handbags</option>
                    </select>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    {activeTab === 'offer' ? 'Offer Description' : 'Description'}
                  </label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full p-3 bg-background border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                </div>
              </div>
              
              <div className="space-y-4 flex flex-col justify-between">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Image *</label>
                  <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-primary/5 transition-colors cursor-pointer relative overflow-hidden h-40">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={e => setImageFile(e.target.files?.[0] || null)} 
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      required={!editingId}
                    />
                    {imageFile ? (
                      <span className="font-medium text-primary line-clamp-1 relative z-0">{imageFile.name}</span>
                    ) : editingImageUrl ? (
                      <div className="absolute inset-0 opacity-50">
                         <Image src={editingImageUrl} alt="Current" fill className="object-cover" sizes="300px" />
                         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
                           <ImageIcon className="w-8 h-8 mb-2" />
                           <span className="text-sm">Click to change image</span>
                         </div>
                      </div>
                    ) : (
                      <>
                        <ImageIcon className="w-8 h-8 text-muted-foreground mb-2" />
                        <span className="text-sm text-muted-foreground">Click to upload image</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    type="submit" 
                    disabled={uploading}
                    className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                  >
                    {uploading ? <><Loader2 className="w-5 h-5 animate-spin" /> Saving...</> : (editingId ? 'Update Item' : 'Save Item')}
                  </button>
                  {editingId && (
                    <button 
                      type="button" 
                      onClick={resetForm}
                      disabled={uploading}
                      className="px-6 py-4 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-secondary/80 transition-all disabled:opacity-50 flex justify-center items-center"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-foreground">Current Items</h2>
            {loading ? (
              <div className="py-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
            ) : products.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground bg-secondary/5 rounded-3xl border border-primary/5">
                No items found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((item) => (
                  <div key={item.id} className="bg-background border border-primary/10 rounded-2xl overflow-hidden group">
                    <div className="aspect-square relative overflow-hidden bg-secondary/20">
                      <Image src={item.image_url} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground line-clamp-1">{item.title}</h3>
                      {item.sub_category && <p className="text-primary font-medium mt-1">{item.sub_category}</p>}
                      <div className="flex gap-2 mt-4">
                        <button 
                          onClick={() => handleEdit(item)}
                          className="flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-medium w-full p-2 bg-primary/10 rounded-lg justify-center transition-colors"
                        >
                          <Edit className="w-4 h-4" /> Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id, item.image_url)}
                          className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-medium w-full p-2 bg-red-500/10 rounded-lg justify-center transition-colors"
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function TabButton({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl font-sans font-medium transition-all ${
        active 
        ? 'bg-primary text-primary-foreground shadow-md' 
        : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )
}
