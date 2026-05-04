import { createClient } from '@/utils/supabase/server'
import { ProductGridClient } from './ProductGridClient'

export async function DynamicProductGrid({ category, filter }: { category: 'new_arrival' | 'offer' | 'collection', filter?: string }) {
  const supabase = await createClient()

  let query = supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false })

  if (filter && filter !== 'all') {
    query = query.eq('sub_category', filter)
  }

  const { data: products, error } = await query

  if (error) {
    console.error(`Error fetching ${category}:`, error)
    return <div className="py-12 text-center text-red-500">Error loading products.</div>
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-20 text-center text-muted-foreground font-sans">
        <p>New items coming soon to this section.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <ProductGridClient products={products} />
    </div>
  )
}
