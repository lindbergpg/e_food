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

type Props = {
  foto: string
  preco: string
  nome: string
  descricao: string
  descricaomodal: string
  porcao: string
  id: number
}

const Product = ({
  foto,
  preco,
  nome,
  descricao,
  descricaomodal,
  porcao
}: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 162) {
      return descricao.slice(0, 159) + '...'
    }
    return descricao
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
              alt=""
              onClick={() => setModalIsVisible(false)}
            />
            <div>
              <Pic src={foto} alt={nome} />
            </div>
            <ContainerInfos>
              <h3>{nome}</h3>
              <p>
                {descricaomodal}
                <br></br>
                <br></br>
                Serve: de {porcao}
              </p>
              <ProductButton>Adicionar ao carrinho - {preco}</ProductButton>
            </ContainerInfos>
          </Card>
        </div>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Product
