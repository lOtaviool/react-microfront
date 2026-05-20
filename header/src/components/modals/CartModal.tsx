import styled from 'styled-components'
import type { Product } from '../../types/product.type'

interface CartModalProps {
  isOpen: boolean
  cartItems: Product[]
  onClose: () => void
}

export default function CartModal({
  isOpen,
  cartItems,
  onClose,
}: CartModalProps) {
  return (
    <>
      <Overlay
        $isOpen={isOpen}
        onClick={onClose}
      />

      <Container $isOpen={isOpen}>

        <div style={{width: '100%', display:'flex', justifyContent:'flex-end'}}>
            <CloseButton onClick={onClose}> ✕ </CloseButton>
        </div>

        <Header>
          <Title>Compras</Title>

          <ItemsCount>
            {cartItems.length}
          </ItemsCount>
        </Header>

        <ProductsList>
          {cartItems.map((item) => (
            <ProductCard key={item.id}>
              <Image
                src={item.thumbnail}
                alt={item.title}
              />

              <ProductInfo>
                <ProductName>
                  {item.title}
                </ProductName>
              </ProductInfo>

              <Price>
                R$ {item.price}
              </Price>
            </ProductCard>
          ))}
        </ProductsList>

        <Footer>
          <ConfirmButton>
            Concluir compras
          </ConfirmButton>

          <CancelButton onClick={onClose}>
            Cancelar
          </CancelButton>
        </Footer>
      </Container>
    </>
  )
}

const Overlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: 0.3s;

    opacity: ${({ $isOpen }) =>
    $isOpen ? 1 : 0};

    visibility: ${({ $isOpen }) =>
    $isOpen ? 'visible' : 'hidden'};

`

const Container = styled.div<{
  $isOpen: boolean
}>`
    position: fixed;
    top: 0;
    right: 0;
    width: 420px;
    max-width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 10;
    padding: 32px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    transform: ${({ $isOpen }) =>
    $isOpen
        ? 'translateX(0)'
        : 'translateX(100%)'};
        
`

const Header = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`

const Title = styled.h2`
    font-size: 22px;
    font-weight: bold;
`

const ItemsCount = styled.span`
    margin-left: auto;
    font-size: 22px;
    font-weight: regular;
`

const CloseButton = styled.button`
    border: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
`

const ProductsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    overflow-y: auto;
`

const ProductCard = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid #27c93f;
    border-radius: 12px;
    padding: 12px;
`

const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
`

const ProductInfo = styled.div` flex: 1; `
const ProductName = styled.p` 
    font-size: 14px;
    font-weight: regular;
`
const Price = styled.p` 
    font-weight: regular; 
    font-size: 14px;
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
`

const ConfirmButton = styled.button`
    background: #27c93f;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 999px;
    cursor: pointer;
    font-weight: bold;
`

const CancelButton = styled.button`
    border: none;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
`