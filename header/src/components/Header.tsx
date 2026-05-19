import { useState } from 'react'
import styled from 'styled-components'

interface Product {
  id: number
  name: string
}

interface HeaderProps {
  cartItems: Product[]
}

export default function Header({ cartItems }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Container>
        <Title>MicroFrontend Store</Title>

        <CartButton onClick={() => setOpen(true)}>
          Carrinho ({cartItems.length})
        </CartButton>
      </Container>

      {open && (
        <Overlay>
          <Modal>
            <h2>Produtos Selecionados</h2>

            {cartItems.length === 0 && (
              <p>Nenhum produto selecionado</p>
            )}

            {cartItems.map((item) => (
              <ProductItem key={item.id}>
                {item.name}
              </ProductItem>
            ))}

            <CloseButton onClick={() => setOpen(false)}>
              Fechar
            </CloseButton>
          </Modal>
        </Overlay>
      )}
    </>
  )
}

const Container = styled.header`
  height: 80px;
  background: #222;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;

  color: white;
`

const Title = styled.h1`
  font-size: 24px;
`

const CartButton = styled.button`
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  width: 400px;

  background: white;
  padding: 24px;
  border-radius: 12px;
`

const ProductItem = styled.p`
  margin-top: 10px;
`

const CloseButton = styled.button`
  margin-top: 20px;
`