// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import PokemonListItem from './PokemonListItem.vue'

expect.extend(toHaveNoViolations)

it('renders correctly', () => {
  render(PokemonListItem, {
    props: {
      pokemon: { name: 'charmeleon', url: '' },
    },
  })

  const pokemonName = screen.getByTestId('pokemon-name')
  expect(pokemonName.textContent).toBe('charmeleon')
})

it('is accessible', async () => {
  const { container } = render(PokemonListItem, {
    props: {
      pokemon: { name: 'charmeleom', url: '' },
    },
  })

  const result = await axe(container)
  expect(result).toHaveNoViolations()
})
