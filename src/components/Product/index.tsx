import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import { add, open } from '../../store/reducers/cart'
import closeIcom from '../../assets/image/close.png'

import * as S from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  descricaomodal: string
  porcao: string
  preco: string
  id: number
  product: CardapioItem
}

const Product = ({ foto, descricao, nome, porcao, preco, product }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 166) {
      return descricao.slice(0, 163) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
    setModalIsVisible(false)
  }

  return (
    <>
      <S.ProductCard>
        <S.ProductPic src={foto} alt={nome} />
        <S.ProductName>{nome}</S.ProductName>
        <S.ProductDescription>{getDescricao(descricao)}</S.ProductDescription>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setModalIsVisible(true)}
        >
          Mais detalhes
        </Button>
      </S.ProductCard>
      <S.Modal className={modalIsVisible ? 'visible' : ''}>
        <div className="container">
          <S.Card>
            <S.Close
              src={closeIcom}
              alt="x"
              onClick={() => setModalIsVisible(false)}
            />
            <div>
              <S.Pic src={foto} alt={nome} />
            </div>
            <S.ContainerInfos>
              <h3>{nome}</h3>
              <p>
                {descricao}
                <br></br>
                <br></br>
                {porcao === '1 pessoa' ? (
                  <p>Serve: 1 pessoa</p>
                ) : (
                  <p>Serve: de {porcao}</p>
                )}
              </p>
              <S.ProductButton onClick={addToCart}>
                Adicionar ao carrinho - {preco}
              </S.ProductButton>
            </S.ContainerInfos>
          </S.Card>
        </div>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </S.Modal>
    </>
  )
}

export default Product
