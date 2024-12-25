import { Bell, LogOut } from 'lucide-react'

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
              <Bell className="w-6 h-6" />
            </button>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="mr-2">Logout</span>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader

