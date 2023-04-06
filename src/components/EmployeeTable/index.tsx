import { formatDate, formatPhoneNumber } from '../../utils'
import { Img, Table, Td, Th } from './styles'

import { useTheme } from 'styled-components'
import { EmployeeProps } from '../../@types/employee'
import { Typography } from '../../components'

interface Props {
  employees: EmployeeProps[]
  loading?: boolean
}

export const EmployeeTable = ({ employees, loading }: Props) => {
  const theme = useTheme()

  return (
    <Table>
      <thead>
        <tr>
          <Th>
            <Typography weight={500} color={theme.colors.white}>
              FOTO
            </Typography>
          </Th>
          <Th>
            <Typography weight={500} color={theme.colors.white}>
              NOME
            </Typography>
          </Th>
          <Th>
            <Typography weight={500} color={theme.colors.white}>
              CARGO
            </Typography>
          </Th>
          <Th>
            <Typography weight={500} color={theme.colors.white}>
              DATA DE ADMISSÃO
            </Typography>
          </Th>
          <Th>
            <Typography weight={500} color={theme.colors.white}>
              TELEFONE
            </Typography>
          </Th>
        </tr>
      </thead>
      {loading ? (
        <tr>
          <Td colSpan={5}>
            <Typography>Carregando...</Typography>
          </Td>
        </tr>
      ) : employees.length > 0 ? (
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Td>
                <Img src={employee.image} alt={employee.name} />
              </Td>
              <Td>
                <Typography>{employee.name}</Typography>
              </Td>
              <Td>
                <Typography>{employee.job}</Typography>
              </Td>
              <Td>
                <Typography>{formatDate(employee.admission_date)}</Typography>
              </Td>
              <Td>
                <Typography>{formatPhoneNumber(employee.phone)}</Typography>
              </Td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <Td colSpan={5}>
              <Typography>Nenhum funcionário encontrado</Typography>
            </Td>
          </tr>
        </tbody>
      )}
    </Table>
  )
}
