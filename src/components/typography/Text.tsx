import styled from "styled-components"

type TextElement = "p" | "span"

type Props = React.PropsWithChildren<{
  as?: TextElement
  variant?: "body" | "caption"
}>

export const Text = styled((props: Props) => {
  const { as: Component = "p", variant: _, ...rest } = props

  return <Component {...rest} />
})`
  font-family: "Lato", sans-serif;
  font-size: ${({ variant = "body" }) => {
    if (variant === "caption") {
      return "0.75rem"
    }
    return "1rem"
  }};
`
