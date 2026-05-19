import { lazy, Suspense, useState } from 'react'
import styled from 'styled-components'

const Header = lazy(() => import('header/Header'))
const Footer = lazy(() => import('footer/Footer'))
const Cards = lazy(() => import('cards/Cards'))

interface Product {
  id: number
  name: string
}

export default function App() {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product])
  }

  return (
    <Container>
      <Suspense fallback={<Loading>Loading Header...</Loading>}>
        <Header cartItems={cartItems} />
      </Suspense>

      <Content>
        <Suspense fallback={<Loading>Loading Cards...</Loading>}>
          <Cards onAddToCart={handleAddToCart} />
        </Suspense>
      </Content>

      <Suspense fallback={<Loading>Loading Footer...</Loading>}>
        <Footer />
      </Suspense>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  flex: 1;
`

const Loading = styled.div`
  padding: 20px;
`