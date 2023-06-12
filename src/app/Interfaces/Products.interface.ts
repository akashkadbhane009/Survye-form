export interface Products {
  status: boolean
  message: string
  data: Product[]
  tracingId: string
  device_uuid: string
}

export interface Product {
  id: string
  product_name: string
  Category: Category
}

export interface Category {
  category_display_name: string
}
