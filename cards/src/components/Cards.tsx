import styled from 'styled-components'

interface Product {
  id: number
  name: string
}

interface CardsProps {
  onAddToCart: (product: Product) => void
}

const products: Product[] = [
  {
    id: 1,
    name: 'Notebook',
  },
  {
    id: 2,
    name: 'Mouse',
  },
  {
    id: 3,
    name: 'Teclado',
  },
]

export default function Cards({
  onAddToCart,
}: CardsProps) {
  return (
    <Container>
      {products.map((product) => (
        <Card key={product.id}>
          <h2>{product.name}</h2>

          <button onClick={() => onAddToCart(product)}>
            Adicionar
          </button>
        </Card>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 20px;

  padding: 40px;
`

const Card = styled.div`
  width: 220px;

  padding: 20px;

  border-radius: 12px;
  background: white;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`