import styled from 'styled-components'
import { breackpoints } from '../../styles'

export const List = styled.ul`
  padding-top: 56px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
