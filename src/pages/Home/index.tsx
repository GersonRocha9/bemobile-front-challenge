import { Container, Header } from './styles'

import Logo from '../../assets/logo.svg'
import { EmployeeTable } from '../../components'

export const Home = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Be mobile Logo" />
      </Header>

      <section style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1>Funcionários</h1>

        <input type="text" />
      </section>

      <EmployeeTable />
    </Container>
  )
}
