import { useEffect, useState } from 'react'
import { EmployeeTable, SearchInput, Typography } from '../../components'
import { Container, Header, SectionSearchContainer } from './styles'

import { EmployeeProps } from '../../@types/employee'
import Logo from '../../assets/logo.svg'
import { api } from '../../services'

export const Home = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([])
  const [search, setSearch] = useState('')

  function getEmployeesFromApi(searchQuery?: string) {
    const endpoint = searchQuery ? `/employees?q=${searchQuery}` : '/employees'
    api.get(endpoint).then((response) => {
      setEmployees(response.data)
    })
  }

  useEffect(() => {
    getEmployeesFromApi(search)
  }, [search])

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Be mobile Logo" />
      </Header>

      <SectionSearchContainer>
        <Typography size={24} weight={500}>
          Funcionários
        </Typography>

        <SearchInput
          placeholder="Pesquisar"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </SectionSearchContainer>

      <EmployeeTable employees={employees} />
    </Container>
  )
}
