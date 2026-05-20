import { useState } from 'react'
import styled from 'styled-components'
import type { Product } from '../types/product.type'
import CartModal from './modals/CartModal'

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
        <img src="/logo_w.svg" alt="logo" width={32} height={32}/>

        <CartButton
          onClick={() => setIsOpen(true)}
        >
          {cartItems.length > 0 && <Tag>{cartItems.length}</Tag>}
          
          <img src="/bag.svg" alt="bag" width={24} height={24}/>
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
  background: #1B2126;
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