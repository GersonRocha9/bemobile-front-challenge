import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 282px;
`

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  color: #333;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #9e9e9e;
  }
`

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #7d7d7d;
`
