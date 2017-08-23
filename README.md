
# react-owl

🦉 React layout component based on the [lobotomized owl selector][owl]
and built with [styled-components][sc]
`* + *`

```sh
npm i react-owl
```

```jsx
import React from 'react'
import Owl from 'react-owl'
import Box from './Box'

const App = props => (
  <Owl>
    <Box />
    <Box />
    <Box />
    <Box />
  </Owl>
)
```

## Margin Direction

Use the `direction` prop to adjust the direction. Defaults to `'top'`.

```jsx
<Owl direction='right'>
  <Link />
  <Link />
  <Link />
</Owl>
```

## Margin Size

Use the `size` prop to adjust the margin value. Defaults to `'1.5em'`.

```jsx
<Owl size='3em'>
  <Box />
  <Box />
</Owl>
```

## Flexbox

Use the [styled-components][sc] library to extend the Owl component for things like setting `display: flex`.

```jsx
import React from 'react'
import Owl from 'react-owl'
import styled from 'styled-components

const FlexOwl = styled(Owl)`
  display: flex;
`

const Nav = props => (
  <FlexOwl>
    <Link />
    <Link />
    <Link />
  </FlexOwl>
)
```


[owl]: https://alistapart.com/article/axiomatic-css-and-lobotomized-owls
[sc]: https://styled-components.com

MIT License
