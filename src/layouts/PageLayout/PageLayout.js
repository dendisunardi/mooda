import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import 'bulma-scss'

export const PageLayout = ({ children }) => (
  <div className='layout-default'>
    <div className='page-layout__viewport content u-flex-auto'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
