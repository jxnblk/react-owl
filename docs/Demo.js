import React from 'react'
import styled from 'styled-components'
import Owl from '../src'

const Root = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  padding: 48px;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`

const Heading = styled.h2`
  font-size: 32px;
  margin: 0;
  line-height: 1.25;
`

const Box = styled.div``

export default () => (
  <Root>
    <Owl>
      <Heading>Owl</Heading>
      <Box>OMG Space</Box>
      <Box>OMG Space</Box>
    </Owl>
  </Root>
)
