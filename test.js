import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import Owl from './src'

test('renders', t => {
  const json = render(<Owl />).toJSON()
  t.snapshot(json)
})
