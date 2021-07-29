import React from 'react'
import { Layout } from 'antd'

import { Card } from '../../components/Home/Card'
import { CustomHeader } from '../../components/Home/CustomHeader'
import { CustomFooter } from '../../components/Home/CustomFooter'

import './styles.css'

/**
 * Components.
 */
const { Content } = Layout

/**
 * Component.
 */
export function Home() {
  return (
    <Layout className="layout">
      <CustomHeader />
      <Content style={{ padding: '20px 30px' }}>
        <Card />
      </Content>
      <CustomFooter />
    </Layout>
  )
}
