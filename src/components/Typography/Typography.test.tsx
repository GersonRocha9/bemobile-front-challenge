import { render, screen } from '@testing-library/react'

import { Typography } from '../../components'

describe('Typography', () => {
  it('renders the text correctly', () => {
    render(<Typography>Test Text</Typography>)
    const typographyElement = screen.getByText('Test Text')
    expect(typographyElement).toBeInTheDocument()
  })

  it('applies the default props correctly', () => {
    render(<Typography>Test Text</Typography>)
    const typographyElement = screen.getByText('Test Text')
    expect(typographyElement).toHaveStyle({
      fontWeight: '400',
      fontSize: '16px',
      color: '#1C1C1C',
    })
  })

  it('applies custom props correctly', () => {
    render(
      <Typography weight={500} size={24} color="#FF0000">
        Test Text
      </Typography>
    )
    const typographyElement = screen.getByText('Test Text')
    expect(typographyElement).toHaveStyle({
      fontWeight: '500',
      fontSize: '24px',
      color: '#FF0000',
    })
  })
})
