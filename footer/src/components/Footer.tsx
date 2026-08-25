import styled from 'styled-components'
const logo = 'https://cdn.vectorstock.com/i/500p/97/29/green-circle-shop-logo-vector-16489729.jpg'

export default function Footer() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <span style={{fontSize: '14px'}}>© 2026 Green Shop - Todos os direitos reservados</span>
    </Container>
  )
}

const Container = styled.footer`
  height: 80px;
  background: #fff;
  color: #1B2126;
  border-top: 1px solid #e5e5e5;
  display: flex;
  padding: 0 32px;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;