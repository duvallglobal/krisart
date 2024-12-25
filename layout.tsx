'use client'

import { ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '../contexts/AuthContext'
import AdminSidebar from './components/AdminSidebar'
import AdminHeader from './components/AdminHeader'
import { AuthProvider } from '../contexts/AuthContext'

function AdminLayoutContent({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Don't check auth for login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    router.push('/admin/login')
    return null
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  )
}

