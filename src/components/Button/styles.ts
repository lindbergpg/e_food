import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.salmon : colors.yellowLight};
  color: ${(props) =>
    props.variant === 'primary' ? colors.yellowLight : colors.salmon};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  border: none;
  width: 100%;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.yellowLight};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
`
