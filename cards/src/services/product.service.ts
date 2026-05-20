import { api } from './api'
import type { ProductsResponse } from '../types/product'

export const getProducts = async () => {
  const { data } =
    await api.get<ProductsResponse>('/products')

  return data.products
}