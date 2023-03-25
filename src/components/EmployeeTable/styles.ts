import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;
  overflow: hidden;
  border: 1px solid #000;

  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;

  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
`

export const Th = styled.th`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 15px 32px;
  text-align: center;
`

export const Td = styled.td`
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 32px;
  background: ${({ theme }) => theme.colors.white};
`

export const Img = styled.img`
  border-radius: 50%;
  height: 33px;
  width: 34px;
`
