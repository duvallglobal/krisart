import Link from 'next/link'
import { Home, ShoppingBag, FileText, Users, Settings } from 'lucide-react'

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link href="/admin" className="text-white flex items-center space-x-2 px-4">
        <Home className="w-6 h-6" />
        <span className="text-2xl font-extrabold">Admin</span>
      </Link>
      <nav>
        <Link href="/admin/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Dashboard
        </Link>
        <Link href="/admin/products" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Products
        </Link>
        <Link href="/admin/orders" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Orders
        </Link>
        <Link href="/admin/custom-requests" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Custom Requests
        </Link>
        <Link href="/admin/blog" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Blog
        </Link>
        <Link href="/admin/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Users
        </Link>
        <Link href="/admin/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default AdminSidebar

