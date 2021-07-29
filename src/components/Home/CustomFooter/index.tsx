import React from 'react'
import { Footer } from 'antd/lib/layout/layout'

export function CustomFooter() {
  return (
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
  )
}
