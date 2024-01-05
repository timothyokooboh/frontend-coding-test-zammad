// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import PokemonPagination from './PokemonPagination.vue'

expect.extend(toHaveNoViolations)

describe('PokemonPagination', () => {
  let wrapper: Element

  beforeEach(() => {
    const { container } = render(PokemonPagination, {
      props: {
        showPrevious: true,
        showNext: true,
      },
    })

    wrapper = container
  })

  it('renders previous button if showPrevious is true', () => {
    const previousButton = screen.getByTestId('previous')
    expect(previousButton.textContent).toMatch(/previous/i)
  })

  it('renders next button if showNext is true', () => {
    const nextButton = screen.getByTestId('next')
    expect(nextButton.textContent).toMatch(/next/i)
  })

  it('is accessible', async () => {
    const result = await axe(wrapper)
    expect(result).toHaveNoViolations()
  })
})
