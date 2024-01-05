/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import Pokemons from './Pokemons.vue'

expect.extend(toHaveNoViolations)

describe('Pokemons', () => {
  let wrapper: Element

  beforeEach(() => {
    const { container } = render(Pokemons, {
      props: {
        showPrevious: true,
        showNext: true,
      },
    })

    wrapper = container
  })

  it('renders correct heading', () => {
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toMatch(/pokemons/i)
  })

  it('is accessible', async () => {
    const result = await axe(wrapper)
    expect(result).toHaveNoViolations()
  })
})
