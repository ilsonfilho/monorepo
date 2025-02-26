import { Button } from "@monorepo/Button"

import { Card } from '@monorepo/Card'
import { Uppercase } from '@monorepo/Uppercase'

function App() {

  return (
    <>
      <h1>FRONTEND - 1.0.0</h1>
      <h2>{Uppercase('ilson')}</h2>
      <Card>TESTE</Card>
      <Button
        onClick={() => alert('1')}
      >TESTE 1</Button>
    </>
  )
}

export default App
