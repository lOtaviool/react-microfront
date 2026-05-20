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

          <CardFooter>
            <Price>
              R$ {product.price}
            </Price>

            <Button
              onClick={() => onAddToCart(product)}
            >
              Comprar
            </Button>

          </CardFooter>

        </Card>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(286px, 1fr));
  gap: 32px 24px;
  padding: 40px;
`

const Card = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #A0AAB4;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  height: 100px;
  border-radius: 8px;
`

const Title = styled.h2`
  margin-top: 16px;
  font-size: 18px;
`

const Description = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
`

const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Price = styled.p`
  font-weight: bold;
  font-size: 20px;
`

const Button = styled.button`
  border: none;
  padding: 12px;
  border-radius: 999px;
  background: #27c93f;
  color: #fff;
`