import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { breackpoints, colors } from '../../styles'

import clear from '../../assets/image/clear.png'
import { ProductButton } from '../Product/styles'

type InputGroupProps = {
  maxWidth?: string
}

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

  @media (max-width: ${breackpoints.tablet}) {
    max-width: 320px;
  }

  > h3 {
    color: ${colors.yellowLight};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .empty-text {
    color: ${colors.yellowLight};
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }
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

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.yellowLight};
    margin: 8px 0;
    display: block;
  }

  input {
    border: 2px solid ${colors.yellowLight};
    background-color: ${colors.yellowLight};
    height: 32px;
    width: 100%;
    padding: 0 8px;
    outline: none;

    &.error {
      border: 2px solid red;
    }
  }

  small {
    color: ${colors.yellowLight};
    font-size: 10px;
  }
`

export const InputGroupCepNumber = styled.div`
  display: flex;
  gap: 34px;
`

export const ButtonGroup = styled.div`
  margin-top: 24px;

  ${ProductButton} {
    margin-bottom: 8px;
  }
`

export const ConfirmContainer = styled.div`
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

  p {
    color: ${colors.yellowLight};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const ConfirmLinkHome = styled(Link)`
  background-color: ${colors.yellowLight};
  color: ${colors.salmon};
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  line-height: 16px;
  display: block;
  border: none;
  width: 100%;
  cursor: pointer;
  text-align: center;
`
