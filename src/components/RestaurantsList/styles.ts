import styled from 'styled-components'
import { breackpoints } from '../../styles'

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (max-width: ${breackpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breackpoints.desktop}) {
    gap: 48px 0px;
  }
`
