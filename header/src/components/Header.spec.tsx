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

    expect(
        screen.getByText('MicroFrontend Store'),
    ).toBeInTheDocument()

    expect(
        screen.getByText('Carrinho (1)'),
    ).toBeInTheDocument()
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

        expect(
            screen.getByText('Carrinho (1)'),
        ).toBeInTheDocument()

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

        expect(
            screen.getByText('Carrinho (2)'),
        ).toBeInTheDocument()
    })
})