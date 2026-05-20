import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <img src="/logo_g.svg" alt="logo" width={50} height={50}/>
      <span style={{fontSize: '14px'}}>© 2024 VR Benefícios - Todos os direitos reservados</span>
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
  justify-content: start;
`