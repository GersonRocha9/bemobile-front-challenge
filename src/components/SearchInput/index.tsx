import { Input, InputWrapper, SearchIcon } from './styles'

import React from 'react'

interface InputProps {
  placeholder: string
}

export const SearchInput: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <InputWrapper>
      <Input type="text" placeholder={placeholder} />
      <SearchIcon />
    </InputWrapper>
  )
}
