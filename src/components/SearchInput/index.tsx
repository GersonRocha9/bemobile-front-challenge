import { Input, InputWrapper, SearchIcon } from './styles'

import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  value: string

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange && onChange(event)}
      />
      <SearchIcon />
    </InputWrapper>
  )
}
