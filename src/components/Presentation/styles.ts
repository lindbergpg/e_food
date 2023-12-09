import styled from 'styled-components'
import { colors } from '../../styles'

export const BackgroundImage = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 24px;
  padding-bottom: 32px;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
    position: relative;
  }
`

export const Type = styled.p`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
`

export const Name = styled.h3`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
`
