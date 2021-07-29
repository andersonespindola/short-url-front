import axios from 'axios'
import { useState } from 'react'
import { Form, Input, Button, Typography } from 'antd'

import { NewUrlMessage } from '../NewUrlMessage'

/**
 * Components.
 */
const { Title } = Typography

export function Card() {
  /**
   * Hooks
   */
  const [form] = Form.useForm()

  /**
   * States.
   */
  const [newUrl, setNewUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const onCheck = async () => {
    const values = await form.getFieldValue('url')
    if (!values) {
      return form.validateFields()
    }

    setLoading(true)

    try {
      const data = { url: values }
      const response = await axios.post(
        `https://minis-url.herokuapp.com/`,
        data
      )
      setNewUrl(response.data)
      setLoading(false)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  return (
    <div className="site-layout-content">
      <Title>Mini's</Title>
      <Form form={form} style={{ alignContent: 'center' }}>
        <Form.Item
          name="url"
          rules={[
            {
              required: true,
              message: '* Mandatory URL *'
            }
          ]}
        >
          <Input placeholder="Put your URL here..." />
        </Form.Item>
        <Form.Item>
          <Button
            shape="round"
            type="primary"
            size="large"
            onClick={onCheck}
            loading={loading}
          >
            Generate new URL
          </Button>
        </Form.Item>
        {newUrl ? <NewUrlMessage newUrl={newUrl} /> : <></>}
      </Form>
    </div>
  )
}
