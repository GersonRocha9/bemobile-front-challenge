import { formatDate, formatPhoneNumber } from '../../utils'
import { Img, Table, Td, Th } from './styles'

import { useTheme } from 'styled-components'
import { EmployeeProps } from '../../@types/employee'
import { Typography } from '../../components'

interface Props {
  employees: EmployeeProps[]
}

export const EmployeeTable = ({ employees }: Props) => {
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
    </Table>
  )
}
