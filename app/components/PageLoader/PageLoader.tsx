import React from 'react'
import { PageLoaderBackground, PageLoaderCircle } from './PageLoader.styled'

const PageLoad: React.FC = () => {
  return (
    <PageLoaderBackground>
      <PageLoaderCircle />
    </PageLoaderBackground>
  )
}

export default PageLoad