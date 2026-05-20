import Cards from './components/Cards'

interface Product {
  id: number
  name: string
}

export default function App() {
  const handleAddToCart = (product: Product) => {
    console.log(product)
  }

  return (
    <Cards onAddToCart={handleAddToCart} />
  )
}