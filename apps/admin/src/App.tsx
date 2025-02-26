import { Button } from '../../../components/Button'
import { Card } from '@monorepo/Card'

import { Uppercase } from '@monorepo/Uppercase'

function App() {

  return (
    <>
      <h1>ADMINISTRADOR - 1.0.0</h1>
      <h2>{Uppercase('lane')}</h2>
      <Card>TESTE</Card>
      <Button
        onClick={() => alert('2')}
      />
    </>
  )
}

export default App
