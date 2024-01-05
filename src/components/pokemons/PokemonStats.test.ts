// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import PokemonStats from './PokemonStats.vue'

expect.extend(toHaveNoViolations)

describe('PokemonStats', () => {
  let wrapper: Element

  beforeEach(() => {
    const { container } = render(PokemonStats, {
      props: {
        stats: [
          { name: 'attack', base_stat: 50 },
          { name: 'defense', base_stat: 40 },
        ],
      },
    })

    wrapper = container
  })

  it('renders pokemon stats correctly', () => {
    const stats = screen.getByTestId('stats')
    expect(stats.textContent).toMatch(/attack/)
    expect(stats.textContent).toMatch(/defense/)
    expect(stats.textContent).toContain(50)
    expect(stats.textContent).toContain(40)
  })
})
