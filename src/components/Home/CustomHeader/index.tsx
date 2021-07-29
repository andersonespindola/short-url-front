import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export function CustomHeader() {
  const history = useHistory()

  /**
   * JSX.
   */
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item
          key={1}
          onClick={() => history.push('/')}
        >{`Mini's - URL shortener`}</Menu.Item>
      </Menu>
    </Header>
  )
}
