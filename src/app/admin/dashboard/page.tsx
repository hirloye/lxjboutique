export const dynamic = 'force-dynamic'

import DashboardClient from '@/components/admin/DashboardClient'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | LXJ Boutique',
}

export default function AdminDashboardPage() {
  return <DashboardClient />
}
