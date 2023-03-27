import { fireEvent, render } from '@testing-library/react'

import { SearchInput } from '../../components'

describe('SearchInput', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Search" value="" />
    )

    expect(getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('calls onChange correctly', () => {
    const handleChange = jest.fn()

    const { getByPlaceholderText } = render(
      <SearchInput placeholder="Search" value="" onChange={handleChange} />
    )

    fireEvent.change(getByPlaceholderText('Search'), {
      target: { value: 'Test' },
    })

    expect(handleChange).toHaveBeenCalled()
  })
})
