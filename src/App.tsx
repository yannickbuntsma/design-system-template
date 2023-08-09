import { Alert } from "./components/Alert"
import { Title } from "./components/typography/Title"
import { Text } from "./components/typography/Text"

function App() {
  return (
    <>
      <Alert>
        <Title as="h2">This is an alert</Title>
        <Text>It might convey some interesting and positive information.</Text>
      </Alert>
    </>
  )
}

export default App
