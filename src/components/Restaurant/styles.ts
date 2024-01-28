import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const RestaurantCard = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const ContainerInfos = styled.div`
  padding: 8px;
`

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
  }

  img {
    margin-left: 8px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.h2`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
`

export const TagCard = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
