import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  weight?: 400 | 500
  size?: 16 | 24
  color?: string
}

const TypographyStyled = styled.p<TypographyProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => color};
`

export const Typography = ({ children, ...props }: TypographyProps) => (
  <TypographyStyled {...props}>{children}</TypographyStyled>
)

Typography.defaultProps = {
  weight: 400,
  size: 16,
  color: '#1C1C1C',
}
