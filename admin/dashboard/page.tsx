import { BarChart, Users, ShoppingBag, DollarSign } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div><div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <BarChart className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold">$24,567</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <Users className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">New Customers</h2>
            <p className="text-2xl font-bold">145</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-yellow-100 p-3 mr-4">
            <ShoppingBag className="w-8 h-8 text-yellow-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Pending Orders</h2>
            <p className="text-2xl font-bold">23</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">$12,345</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          {/* Add a table or list of recent orders here */}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
          {/* Add a chart or list of top selling products here */}
        </div>
      </div>
    </div>
  )
}

