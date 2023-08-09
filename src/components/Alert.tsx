import styled from "styled-components"
import { Box } from "./layout/Box"

export const Alert = styled((props: Record<string, unknown>) => (
  <Box
    {...props}
    paddingX="L"
    paddingY="M"
  />
))`
  border-radius: 1rem;
  background-color: #ecfdf5;
  color: #047857;
`
