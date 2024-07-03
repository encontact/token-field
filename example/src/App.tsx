import React, { useEffect, useState } from 'react'
import { TokenField } from 'react-token-field'

interface User {
  firstName: string
  lastName: string
  email: string
  image: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    window
      .fetch('https://dummyjson.com/users')
      .then((res: Response) => res.json())
      .then((res) => setUsers(res.users))
  }, [])

  console.log(users, "users")


  const emailPattern: string = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'

  return (
    <div
      style={{
        width: '600px',
        fontFamily: 'Arial',
        padding: '10px',
        margin: '0 auto'
      }}
    >
      <TokenField
        placeholder='Type an email'
        pattern={emailPattern}
        delimiters=',; '
        showRemoveButton={false}
        tokens={['oi', 'hello', 'eaei']}
      />
    </div>
  )
}

export default App
