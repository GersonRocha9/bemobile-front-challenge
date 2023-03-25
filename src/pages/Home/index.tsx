import { EmployeeTable, SearchInput, Typography } from '../../components'
import { Container, Header, SectionSearchContainer } from './styles'

import Logo from '../../assets/logo.svg'

export const Home = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Be mobile Logo" />
      </Header>

      <SectionSearchContainer>
        <Typography size={24} weight={500}>
          Funcionários
        </Typography>

        <SearchInput placeholder="Pesquisar" />
      </SectionSearchContainer>

      <EmployeeTable />
    </Container>
  )
}
