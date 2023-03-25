import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 32px;
`
