// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import PokemonListItemDetails from './PokemonListItemDetails.vue'

expect.extend(toHaveNoViolations)

describe('PokemonListItemDetails', () => {
  let wrapper: Element
  beforeEach(() => {
    const { container } = render(PokemonListItemDetails, {
      props: {
        pokemonDetails: {
          name: 'caterpie',
          image: 'https://image.com',
          weight: 230,
          abilities: ['run-away'],
          stats: [
            { base_stat: 25, name: 'attack' },
            { base_stat: 25, name: 'defense' },
          ],
        },
      },
    })

    wrapper = container
  })

  it('renders pokemon details correctly', async () => {
    const backBtn = screen.getByTestId('back-btn')
    const pokemonName = screen.getByTestId('name')
    const pokemonWeight = screen.getByTestId('weight')
    const pokemonAbilities = screen.getByTestId('abilities')
    const statsTitle = screen.getByTestId('stats-title')
    const statsContent = screen.getByTestId('stats-content')
    const image = screen.getByTestId('image')

    expect(backBtn.textContent).toMatch(/back to pokemons/i)
    expect(pokemonName.textContent).toMatch(/caterpie/i)
    expect(pokemonWeight.textContent).toMatch(/weight: 230/i)
    expect(pokemonAbilities.textContent).toMatch(/run-away/i)
    expect(statsTitle.textContent).toMatch(/Stats/i)
    expect(statsContent.textContent).toMatch(/attack/i)
    expect(statsContent.textContent).toMatch(/defense/i)
    expect(image.getAttribute('src')).toBe('https://image.com')
  })

  it('is accessible', async () => {
    const result = await axe(wrapper)
    expect(result).toHaveNoViolations()
  })
})
