import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import {
  ProductCard,
  ProductName,
  ProductDescription,
  ProductButton,
  ProductPic
} from './styles'

import { Card, Close, ContainerInfos, Pic, Modal } from './styles'

import close from '../../assets/image/close.png'

import { add, open } from '../../store/reducers/cart'
import { CardapioItem } from '../../Pages/Home'

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
  }

  return (
    <>
      <ProductCard>
        <ProductPic src={foto} alt={nome} />
        <ProductName>{nome}</ProductName>
        <ProductDescription>{getDescricao(descricao)}</ProductDescription>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setModalIsVisible(true)}
        >
          Mais detalhes
        </Button>
      </ProductCard>
      <Modal className={modalIsVisible ? 'visible' : ''}>
        <div className="container">
          <Card>
            <Close
              src={close}
              alt="x"
              onClick={() => setModalIsVisible(false)}
            />
            <div>
              <Pic src={foto} alt={nome} />
            </div>
            <ContainerInfos>
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
              <ProductButton onClick={addToCart}>
                Adicionar ao carrinho - {preco}
              </ProductButton>
            </ContainerInfos>
          </Card>
        </div>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Product
