import styled from 'styled-components'
import { useProducts } from '../hooks/useProducts'
import type { Product } from '../types/product'
interface CardsProps {
  onAddToCart: (product: Product) => void
}

export default function Cards({
  onAddToCart,
}: CardsProps) {
  const { data: products, isLoading, isError} = useProducts()
  // const products: Product[] = []

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (isError) {
    return <p>Erro ao carregar produtos</p>
  }

  return (
    <Container>
      {products?.map((product) => (
        <Card key={product.id}>
          <Image
            src={product.thumbnail}
            alt={product.title}
          />

          <Title>{product.title}</Title>

          <Description>
            {product.description}
          </Description>

          <Price>
            R$ {product.price}
          </Price>

          <Button
            onClick={() => onAddToCart(product)}
          >
            Adicionar
          </Button>
        </Card>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 24px;

  padding: 40px;
`

const Card = styled.div`
  background: white;

  border-radius: 12px;

  padding: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Image = styled.img`
  width: 100%;

  height: 200px;

  object-fit: cover;

  border-radius: 8px;
`

const Title = styled.h2`
  margin-top: 16px;

  font-size: 20px;
`

const Description = styled.p`
  margin-top: 12px;

  color: #666;
`

const Price = styled.p`
  margin-top: 16px;

  font-weight: bold;

  font-size: 22px;
`

const Button = styled.button`
  width: 100%;

  margin-top: 20px;

  border: none;

  padding: 12px;

  border-radius: 8px;

  background: #222;

  color: white;
`