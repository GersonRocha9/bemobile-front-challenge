import styled from 'styled-components'

export const Table = styled.table`
  text-align: center;
  width: 100%;
`

export const Th = styled.th`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 15px 32px;
  text-align: center;
`

export const Td = styled.td`
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  padding: 8px 32px;
`

export const Img = styled.img`
  border-radius: 50%;
  height: 33px;
  width: 34px;
`
