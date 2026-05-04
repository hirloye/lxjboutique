import { createClient } from '@/utils/supabase/server'
import { LookbookClient } from './LookbookClient'

export async function Lookbook() {
  const supabase = await createClient()
  
  // Fetch one item for each category: saree, kurti, lehenga
  const categories = ['saree', 'kurti', 'lehenga']
  
  const products = await Promise.all(
    categories.map(async (cat) => {
      const { data } = await supabase
        .from('products')
        .select('id, title, sub_category, image_url')
        .eq('sub_category', cat)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
      
      return data
    })
  )

  // Filter out any null values if a category has no products
  const validProducts = products.filter(Boolean)

  if (validProducts.length === 0) {
    return null // Or a fallback
  }

  return <LookbookClient products={validProducts as any} />
}
