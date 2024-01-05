// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import PokemonAbilities from './PokemonAbilities.vue'

expect.extend(toHaveNoViolations)

describe('PokemonAbilities', () => {
  let wrapper: any

  beforeEach(() => {
    const { container } = render(PokemonAbilities, {
      props: {
        abilities: ['hp', 'attack', 'defense'],
      },
    })

    wrapper = container
  })

  it('renders correct pokemon abilities', () => {
    const pokemonAbilitiesWrapper = screen.getByTestId('pokemon-abilities')
    expect(pokemonAbilitiesWrapper.textContent).toContain('hp')
    expect(pokemonAbilitiesWrapper.textContent).toContain('attack')
    expect(pokemonAbilitiesWrapper.textContent).toContain('defense')
  })

  it('does not render abilities that are absent', () => {
    const pokemonAbilitiesWrapper = screen.getByTestId('pokemon-abilities')
    expect(pokemonAbilitiesWrapper.textContent).not.toContain('strong')
  })

  it('is accessible', async () => {
    const result = await axe(wrapper)
    expect(result).toHaveNoViolations()
  })
})
