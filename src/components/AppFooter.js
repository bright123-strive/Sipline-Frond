import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="www.sipline.com" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ms-1">&copy; 2023 Sipline</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="www.sipline.com" target="_blank" rel="noopener noreferrer">
          Sipline
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
