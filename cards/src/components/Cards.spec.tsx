import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'
import Cards from './Cards'
import * as productService from '../services/product.service'

jest.mock('../services/product.service')

const mockProducts = [
  {
    id: 1,
    title: 'Iphone 15',
    description: 'Produto teste',
    price: 5000,
    thumbnail: 'image.png',
  },
]

const createWrapper = () => {
  const queryClient = new QueryClient()

  return ({ children }: any) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

describe('Cards Component', () => {
    it('should render products from api', async () => {
        jest
        .spyOn(productService, 'getProducts')
        .mockResolvedValue(mockProducts as any)

        render(
            <Cards onAddToCart={jest.fn()} />,
        {
            wrapper: createWrapper(),
        },
        )

        await waitFor(() => {
            expect(
                screen.getByText('Iphone 15'),
            ).toBeInTheDocument()
        })
    })

    it('should call onAddToCart when click button', async () => {
        jest
            .spyOn(productService, 'getProducts')
            .mockResolvedValue(mockProducts as any)

        const onAddToCart = jest.fn()

        render(
            <Cards onAddToCart={onAddToCart} />,
            {
            wrapper: createWrapper(),
            },
        )

        const button = await screen.findByText(
            'Adicionar',
        )

        await userEvent.click(button)

        expect(onAddToCart).toHaveBeenCalledTimes(1)

        expect(onAddToCart).toHaveBeenCalledWith(
            mockProducts[0],
        )
    })

    it('should render loading state', () => {
        jest
            .spyOn(productService, 'getProducts')
            .mockImplementation(
            () => new Promise(() => {}),
            )

        render(
            <Cards onAddToCart={jest.fn()} />,
            {
            wrapper: createWrapper(),
            },
        )

        expect(
            screen.getByText(
            'Carregando produtos...',
            ),
        ).toBeInTheDocument()
    })

    it('should render error state', async () => {
        jest
            .spyOn(productService, 'getProducts')
            .mockRejectedValue(new Error())

        render(
            <Cards onAddToCart={jest.fn()} />,
            {
            wrapper: createWrapper(),
            },
        )

        await waitFor(() => {
            expect(
            screen.getByText(
                'Erro ao carregar produtos',
            ),
            ).toBeInTheDocument()
        })
    })
})