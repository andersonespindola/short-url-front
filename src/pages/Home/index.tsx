import axios from 'axios'
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Form, Input, Button } from 'antd'

import { NewUrlMessage } from '../../components/Home/NewUrlMessage'

import './styles.css'

/**
 * Components.
 */
const { Header, Content, Footer } = Layout

/**
 * Components style.
 */
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}

/**
 * Component.
 */
export function Home() {
  /**
   * Hooks
   */
  const [form] = Form.useForm()
  const history = useHistory()

  /**
   * States.
   */
  const [newUrl, setNewUrl] = useState('')

  const onCheck = async () => {
    try {
      const values = await form.validateFields()
      const data = { url: values.url }
      const response = await axios.post(
        `https://minis-url.herokuapp.com/`,
        data
      )
      setNewUrl(response.data)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item
            key={1}
            onClick={() => history.push('/')}
          >{`Mini's - URL shortening`}</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} />
        <div className="site-layout-content">
          <Form
            form={form}
            name="dynamic_rule"
            style={{ alignContent: 'center' }}
          >
            <Form.Item
              {...formItemLayout}
              name="url"
              label="URL"
              rules={[
                {
                  required: true,
                  message: 'Mandatory URL'
                }
              ]}
            >
              <Input placeholder="Put your URL here..." />
            </Form.Item>
            <Form.Item {...formTailLayout}>
              <Button type="primary" onClick={onCheck}>
                Generate new URL
              </Button>
            </Form.Item>
            {newUrl ? <NewUrlMessage newUrl={newUrl} /> : <></>}
          </Form>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          bottom: 0
        }}
      >
        Mini's ©2021 Created by Anderson Espindola
      </Footer>
    </Layout>
  )
}
