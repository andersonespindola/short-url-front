import { Alert, Button } from 'antd'
import React, { useEffect, useState } from 'react'

/**
 * New message properties.
 */
type NewUrlMessageProp = {
  newUrl: string
}

export function NewUrlMessage({ newUrl }: NewUrlMessageProp) {
  /**
   * States.
   */
  const [message, setMessage] = useState('Copy')

  /**
   * Effects.
   */
  useEffect(() => setMessage('Copy'), [newUrl])

  /**
   * JSX.
   */
  return (
    <Alert
      message={`Url gerada: ${newUrl}`}
      type="success"
      showIcon
      action={
        <Button
          size="small"
          type="ghost"
          onClick={() => {
            navigator.clipboard.writeText(newUrl)
            setMessage('Copied!')
          }}
        >
          {message}
        </Button>
      }
    />
  )
}
