import { render, screen } from '@testing-library/react'

import Header from './Header'

const mockCart = [
  {
    id: 1,
    title: 'Produto Teste',
    price: 100,
    thumbnail: 'image.png',
  },
]

describe('Header Component', () => {
    it('should render header correctly', () => {
        render(
            <Header cartItems={mockCart} />,
        )

        const logoImg = screen.getByRole('img', { name: /logo/i })
        expect(logoImg).toBeInTheDocument()
        expect(logoImg).toHaveAttribute('src', '/logo_w.svg')
    })

    it('should increment cart quantity', () => {
        const firstCart = [
            {
            id: 1,
            title: 'Produto 1',
            price: 100,
            thumbnail: 'image.png',
            },
        ]

        const { rerender } = render(
            <Header cartItems={firstCart} />,
        )

        const myButton = screen.getByRole('button', { name: /Minicart/i })
        expect(myButton).toBeInTheDocument()

        const updatedCart = [
            ...firstCart,

            {
                id: 2,
                title: 'Produto 2',
                price: 200,
                thumbnail: 'image.png',
            },
        ]

        rerender(
            <Header cartItems={updatedCart} />,
        )

        expect(myButton).toBeInTheDocument()
    })
})