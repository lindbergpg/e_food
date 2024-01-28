import styled from 'styled-components'
import { breackpoints, colors } from '../../styles'

export const ProductCard = styled.div`
  background-color: ${colors.salmon};
  padding: 8px;
`

export const ProductPic = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  padding-top: 4px;
  color: ${colors.yellowLight};
`

export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.yellowLight};
  padding: 8px 0;
`

export const ProductButton = styled.button`
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
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.8;
  }
`

export const Card = styled.div`
  background-color: ${colors.salmon};
  color: ${colors.white};
  padding: 32px;
  position: relative;
  display: flex;

  @media (max-width: ${breackpoints.tablet}) {
    display: block;
  }
`

export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const Pic = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: ${breackpoints.tablet}) {
    width: 100%;
  }
`

export const ContainerInfos = styled.div`
  margin-left: 24px;

  @media (max-width: ${breackpoints.tablet}) {
    margin-left: 0;
    margin-top: 24px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0;
  }

  button {
    width: auto;
  }
`
