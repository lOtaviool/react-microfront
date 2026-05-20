import Header from './components/Header'
import type { Product } from './types/product.type'

const mockProducts: Product[] = []

export default function App() {
  return (
    <Header cartItems={mockProducts} />
  )
}