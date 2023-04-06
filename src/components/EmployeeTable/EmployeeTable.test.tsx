import { render, screen } from '@testing-library/react'
import { formatDate, formatPhoneNumber } from '../../utils'

import { ThemeProvider } from 'styled-components'
import { EmployeeProps } from '../../@types/employee'
import { EmployeeTable } from '../../components'
import { defaultTheme } from '../../styles'

describe('EmployeeTable', () => {
  const employees: EmployeeProps[] = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Software Engineer',
      admission_date: '2022-01-01',
      phone: '123-456-7890',
      image: 'https://example.com/image.png',
    },
  ]

  it('renders the employee table with the correct data', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <EmployeeTable employees={employees} />
      </ThemeProvider>
    )

    const nameCell = screen.getByText('John Doe')
    const jobCell = screen.getByText('Software Engineer')
    const dateCell = screen.getByText(formatDate('2022-01-01'))
    const phoneCell = screen.getByText(formatPhoneNumber('123-456-7890'))

    expect(nameCell).toBeInTheDocument()
    expect(jobCell).toBeInTheDocument()
    expect(dateCell).toBeInTheDocument()
    expect(phoneCell).toBeInTheDocument()
  })

  it('renders the employee user image correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <EmployeeTable employees={employees} />
      </ThemeProvider>
    )

    const avatar = screen.getByAltText('John Doe')

    expect(avatar).toBeInTheDocument()

    expect(avatar).toHaveAttribute('src', 'https://example.com/image.png')
  })
})
