import styled from 'styled-components'
import PropTypes from 'prop-types'

const sx = ({
  direction,
  size
}) => ({
  '& > * + *': {
    ['margin-' + direction]: size
  }
})

const Owl = styled.div([], sx)

Owl.defaultProps = {
  direction: 'top',
  size: '1.5em'
}

Owl.propTypes = {
  direction: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left'
  ]),
  size: PropTypes.string
}

export default Owl
