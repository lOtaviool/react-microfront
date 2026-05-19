import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      Footer MicroFrontend
    </Container>
  )
}

const Container = styled.footer`
  height: 80px;

  background: #222;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`