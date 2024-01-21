import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ProductButton } from '../Product/styles'
import {
  CartContainer,
  Overlay,
  SideBar,
  CartItem,
  Amount,
  InputGroup,
  InputGroupCepNumber,
  ButtonGroup,
  ConfirmContainer
} from './styles'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../ProductsList'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { isError, isLoading, isSuccess, data }] =
    usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const formVal = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(10, 'O cep precisa ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        4,
        'O número precisa ter pelo menos 4 caracteres'
      ),

      cardName: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O número precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: 1,
              year: 2024
            }
          }
        }
      })
    }
  })

  const [activeTab, setActiveTab] = useState('cart')

  const handleCart = () => {
    setActiveTab('cart')
  }

  const handleDelivey = () => {
    setActiveTab('delivery')
  }

  const handlePayment = () => {
    setActiveTab('payment')
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formVal.touched
    const isInvalid = fieldName in formVal.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const handle = () => {
    if (activeTab === 'cart') {
      return (
        <>
          <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <SideBar>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt="" />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formatPrice(item.preco)}</span>
                    </div>
                    <button type="button" onClick={() => removeItem(item.id)} />
                  </CartItem>
                ))}
              </ul>
              <Amount>
                <p>Valor total</p>
                <p>{formatPrice(getTotalPrice())}</p>
              </Amount>
              <ProductButton onClick={() => handleDelivey()}>
                Continuar com a entrega
              </ProductButton>
            </SideBar>
          </CartContainer>
        </>
      )
    }

    if (activeTab === 'delivery') {
      return (
        <>
          <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <SideBar>
              <h3>Entrega</h3>
              <form onSubmit={formVal.handleSubmit}>
                <InputGroup>
                  <label htmlFor="name">Quem irá receber</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formVal.values.name}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                  />
                  <small>{getErrorMessage('name', formVal.errors.name)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formVal.values.address}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                  />
                  <small>
                    {getErrorMessage('address', formVal.errors.address)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formVal.values.city}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                  />
                  <small>{getErrorMessage('city', formVal.errors.city)}</small>
                </InputGroup>
                <InputGroupCepNumber>
                  <InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <input
                      type="text"
                      name="cep"
                      id="cep"
                      value={formVal.values.cep}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                    />
                    <small>{getErrorMessage('cep', formVal.errors.cep)}</small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={formVal.values.number}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                    />
                    <small>
                      {getErrorMessage('number', formVal.errors.number)}
                    </small>
                  </InputGroup>
                </InputGroupCepNumber>
                <InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    name="complement"
                    id="complement"
                    value={formVal.values.complement}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                  />
                  <small>
                    {getErrorMessage('complement', formVal.errors.complement)}
                  </small>
                </InputGroup>
                <ButtonGroup>
                  <ProductButton onClick={() => handlePayment()}>
                    Continuar com o pagamento
                  </ProductButton>
                  <ProductButton onClick={() => handleCart()}>
                    Voltar para o carrinho
                  </ProductButton>
                </ButtonGroup>
              </form>
            </SideBar>
          </CartContainer>
        </>
      )
    }

    if (activeTab === 'payment') {
      return (
        <>
          <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <SideBar>
              <h3>Pagamento - Valor a pagar R$ 190,90</h3>
              <form onSubmit={formVal.handleSubmit}>
                <InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    value={formVal.values.cardName}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardName', formVal.errors.cardName)}
                  </small>
                </InputGroup>
                <InputGroupCepNumber>
                  <InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      value={formVal.values.cardNumber}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardNumber', formVal.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <input
                      type="text"
                      name="cardCode"
                      id="cardCode"
                      value={formVal.values.cardCode}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                    />
                    <small>
                      {getErrorMessage('cardCode', formVal.errors.cardCode)}
                    </small>
                  </InputGroup>
                </InputGroupCepNumber>
                <InputGroupCepNumber>
                  <InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      type="text"
                      name="expiresMonth"
                      id="expiresMonth"
                      value={formVal.values.expiresMonth}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        formVal.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="text"
                      name="expiresYear"
                      id="expiresYear"
                      value={formVal.values.expiresYear}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'expiresYear',
                        formVal.errors.expiresYear
                      )}
                    </small>
                  </InputGroup>
                </InputGroupCepNumber>
                <ButtonGroup>
                  <ProductButton>Finalizar pagamento</ProductButton>
                  <ProductButton onClick={() => handleDelivey()}>
                    Voltar para a edição de endereço
                  </ProductButton>
                </ButtonGroup>
              </form>
            </SideBar>
          </CartContainer>
        </>
      )
    }
  }

  return (
    <>
      {isSuccess ? (
        <ConfirmContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <SideBar>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <ProductButton>Concluir</ProductButton>
          </SideBar>
        </ConfirmContainer>
      ) : (
        <div>{handle()}</div>
      )}
    </>
  )
}

export default Cart
