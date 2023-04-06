import { useEffect, useState } from 'react'
import { EmployeeTable, SearchInput, Typography } from '../../components'
import { Container, Header, SectionSearchContainer } from './styles'

import { EmployeeProps } from '../../@types/employee'
import Logo from '../../assets/logo.svg'
import { useDebounce } from '../../hooks'
import { api } from '../../services'

export const Home = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([])
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const [loading, setLoading] = useState(false)

  function getEmployeesFromApi(searchQuery?: string) {
    setLoading(true)
    // setTimeout apenas para simular o loading de uma requisição
    setTimeout(() => {
      const endpoint = searchQuery
        ? `/employees?q=${searchQuery}`
        : '/employees'
      api.get(endpoint).then((response) => {
        setEmployees(response.data)
        setLoading(false)
      })
    }, 1000)
  }

  useEffect(() => {
    getEmployeesFromApi(debouncedSearch)
  }, [debouncedSearch])

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

      <EmployeeTable employees={employees} loading={loading} />
    </Container>
  )
}
