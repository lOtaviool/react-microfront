import Header from './components/Header'

interface Product {
  id: number
  name: string
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Notebook',
  },
]

export default function App() {
  return (
    <Header cartItems={mockProducts} />
  )
}