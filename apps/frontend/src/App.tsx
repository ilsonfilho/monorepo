import { Button } from '@monorepo/Button'
import { Card } from '@monorepo/Card'
import { Uppercase } from '@monorepo/Uppercase'

function App() {

  return (
    <>
      <h1>FRONTEND</h1>
      <h2>{Uppercase('ilson')}</h2>
      <Card>TESTE</Card>
      <Button
        onClick={() => alert('1')}
      />
    </>
  )
}

export default App
