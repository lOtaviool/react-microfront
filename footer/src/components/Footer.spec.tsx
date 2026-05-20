// @jest-environment jsdom
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer Component', () => {
  it('should render footer correctly', () => {
    render(<Footer />)

    expect(
      screen.getByText('© 2024 VR Benefícios - Todos os direitos reservados'),
    ).toBeInTheDocument()
  })
})