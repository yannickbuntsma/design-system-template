import styled from "styled-components"

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type Props = React.PropsWithChildren<{
  as: HeadingElement
  variant?: "normal" | "big" | "huge"
}>

export const Title = styled((props: Props) => {
  const { as: Component, variant: _, ...rest } = props

  return <Component {...rest} />
})`
  font-weight: bold;
  font-size: ${({ variant = "normal" }) => {
    if (variant === "huge") return "3rem"
    if (variant === "big") return "2.25rem"
    return "1.5rem"
  }};
  line-height: 1;
`
