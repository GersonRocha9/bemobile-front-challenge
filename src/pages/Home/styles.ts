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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const SectionSearchContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 30px;
`
