import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../Utils'

import { ProductButton } from '../Product/styles'
import * as S from './styles'
import { ConfirmLinkHome } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
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
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
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
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formVal.touched
    const isInvalid = fieldName in formVal.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const handle = () => {
    if (activeTab === 'cart') {
      return (
        <>
          <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.SideBar>
              {items.length > 0 ? (
                <>
                  <ul>
                    {items.map((item) => (
                      <S.CartItem key={item.id}>
                        <img src={item.foto} alt="" />
                        <div>
                          <h3>{item.nome}</h3>
                          <span>{parseToBrl(item.preco)}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                        />
                      </S.CartItem>
                    ))}
                  </ul>
                  <S.Amount>
                    <p>Valor total</p>
                    <p>{parseToBrl(getTotalPrice(items))}</p>
                  </S.Amount>
                  <ProductButton onClick={() => handleDelivey()}>
                    Continuar com a entrega
                  </ProductButton>
                </>
              ) : (
                <p className="empty-text">
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar com a compra.
                </p>
              )}
            </S.SideBar>
          </S.CartContainer>
        </>
      )
    }

    if (activeTab === 'delivery') {
      return (
        <>
          <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.SideBar>
              <h3>Entrega</h3>
              <form onSubmit={formVal.handleSubmit}>
                <S.InputGroup>
                  <label htmlFor="name">Quem irá receber</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formVal.values.name}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                    className={checkInputHasError('name') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formVal.values.address}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formVal.values.city}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroupCepNumber>
                  <S.InputGroup>
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      type="text"
                      name="cep"
                      id="cep"
                      value={formVal.values.cep}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                      mask="99.999-999"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      value={formVal.values.number}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </S.InputGroupCepNumber>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    name="complement"
                    id="complement"
                    value={formVal.values.complement}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.ButtonGroup>
                  <ProductButton onClick={() => handlePayment()}>
                    Continuar com o pagamento
                  </ProductButton>
                  <ProductButton onClick={() => handleCart()}>
                    Voltar para o carrinho
                  </ProductButton>
                </S.ButtonGroup>
              </form>
            </S.SideBar>
          </S.CartContainer>
        </>
      )
    }

    if (activeTab === 'payment') {
      return (
        <>
          <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.SideBar>
              <h3>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
              </h3>
              <form onSubmit={formVal.handleSubmit}>
                <S.InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    value={formVal.values.cardName}
                    onChange={formVal.handleChange}
                    onBlur={formVal.handleBlur}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroupCepNumber>
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      value={formVal.values.cardNumber}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      name="cardCode"
                      id="cardCode"
                      value={formVal.values.cardCode}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </S.InputGroup>
                </S.InputGroupCepNumber>
                <S.InputGroupCepNumber>
                  <S.InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      name="expiresMonth"
                      id="expiresMonth"
                      value={formVal.values.expiresMonth}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      name="expiresYear"
                      id="expiresYear"
                      value={formVal.values.expiresYear}
                      onChange={formVal.handleChange}
                      onBlur={formVal.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      mask="99"
                    />
                  </S.InputGroup>
                </S.InputGroupCepNumber>
                <S.ButtonGroup>
                  <ProductButton disabled={isLoading}>
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </ProductButton>
                  <ProductButton onClick={() => handleDelivey()}>
                    Voltar para a edição de endereço
                  </ProductButton>
                </S.ButtonGroup>
              </form>
            </S.SideBar>
          </S.CartContainer>
        </>
      )
    }
  }

  return (
    <>
      {isSuccess && data ? (
        <S.ConfirmContainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.SideBar>
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
            <ConfirmLinkHome to="/" onClick={closeCart}>
              Concluir
            </ConfirmLinkHome>
          </S.SideBar>
        </S.ConfirmContainer>
      ) : (
        <div>{handle()}</div>
      )}
    </>
  )
}

export default Cart
