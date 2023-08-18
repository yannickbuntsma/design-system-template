import styled, { css } from "styled-components"
import { Box } from "./layout/Box"

type Props = React.PropsWithChildren<{
  variant?: "info" | "warning" | "success" | "error"
}>

export const Alert = styled((props: Props) => (
  <Box
    {...props}
    paddingX="L"
    paddingY="M"
  >
    {props.children}
  </Box>
))`
  border-radius: 0.5rem;
  ${({ variant = "info" }) => {
    switch (variant) {
      case "info":
        return css`
          background-color: #e0e7ff;
          color: #312e81;
        `

      case "warning":
        return css`
          background-color: #fef3c7;
          color: #78350f;
        `

      case "success":
        return css`
          background-color: #d1fae5;
          color: #064e3b;
        `

      case "error":
        return css`
          background-color: var(--color-danger-light);
          color: var(--color-danger-dark);
        `
    }
  }}
`
