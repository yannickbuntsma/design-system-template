import styled, { css } from "styled-components"
import { Box } from "./layout/Box"

type Props = React.PropsWithChildren<{
  variant?: "success" | "error"
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
      case "success":
        return css`
          background-color: var(--color-success-100);
          color: var(--color-green-900);
        `

      case "error":
        return css`
          background-color: var(--color-error-100);
          color: var(--color-error-900);
        `
    }
  }}
`
