export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  lastLogin?: Date
  twoFactorEnabled: boolean
}

export interface Order {
  id: string
  customerName: string
  customerEmail: string
  items: OrderItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  price: number
}

export interface CustomRequest {
  id: string
  clientName: string
  clientEmail: string
  projectType: string
  description: string
  budget: number
  timeline: string
  status: 'new' | 'in-progress' | 'completed' | 'cancelled'
  files: string[]
  createdAt: Date
  updatedAt: Date
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  category: string[]
  tags: string[]
  status: 'draft' | 'published' | 'scheduled'
  publishDate: Date
  createdAt: Date
  updatedAt: Date
}

export interface Analytics {
  pageViews: number
  uniqueVisitors: number
  averageTimeOnSite: number
  topPages: { url: string; views: number }[]
  salesData: {
    total: number
    period: string
    comparisonToLastPeriod: number
  }
}

