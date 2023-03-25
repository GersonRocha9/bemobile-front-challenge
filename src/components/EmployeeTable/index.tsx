import { useEffect, useState } from 'react'
import { formatDate, formatPhoneNumber } from '../../utils'
import { Img, Table, Td, Th } from './styles'

import { useTheme } from 'styled-components'
import { Typography } from '../../components'
import { api } from '../../services'

interface Employee {
  id: number
  name: string
  job: string
  admission_date: string
  phone: string
  image: string
}

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([])
  const theme = useTheme()

  function getEmployeesFromApi() {
    api.get('/employees').then((response) => {
      setEmployees(response.data)
    })
  }

  useEffect(() => {
    getEmployeesFromApi()
  }, [])

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
