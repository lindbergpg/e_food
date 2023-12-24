import styled from 'styled-components'
import { colors } from '../../styles'

import clear from '../../assets/image/clear.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.div`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
`

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.yellowLight};
  padding: 24px 0 16px 0;
`

export const CartItem = styled.li`
  background-color: ${colors.yellowLight};
  display: flex;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-image: url(${clear});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
