import { useState } from 'react'
import styled from 'styled-components'
import type { Product } from '../types/product.type'
import CartModal from './modals/CartModal'
const logo = 'https://cdn.vectorstock.com/i/500p/97/29/green-circle-shop-logo-vector-16489729.jpg'
const bagIcon = 'https://cdn-icons-png.flaticon.com/512/6769/6769651.png'

interface HeaderProps {
  cartItems: Product[]
}

export default function Header({
  cartItems,
}: HeaderProps) {
  const [isOpen, setIsOpen] =
    useState(false)

  return (
    <>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Logo src={logo} alt="logo" />
          <h1 >Green Shop</h1>
        </div>

        <CartButton
          title="Compras"
          onClick={() => setIsOpen(true)}
          aria-label="Minicart"
        >
          {cartItems.length > 0 && <Tag>{cartItems.length}</Tag>}
          
          <img src={bagIcon} alt="bag" width={18} height={18}/>
        </CartButton>
      </Container>

      <CartModal
        isOpen={isOpen}
        cartItems={cartItems}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

const Container = styled.header`
  height: 80px;
  background: #27c93f;
  color: white;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CartButton = styled.button`
  position: relative;
  border: none;
  background: #FFF;
  color: white;
  padding: 6px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: bold;
`
const Tag = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 999px;
  background: white;
  color: black;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;