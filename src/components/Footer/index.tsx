import logo from '../../assets/image/logo.svg'
import instagram from '../../assets/image/instagram.svg'
import facebook from '../../assets/image/facebook.svg'
import twitter from '../../assets/image/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterPag>
    <S.FooterContainer className="container">
      <S.LinkHome to="/" title="Voltar para a página principal">
        <img src={logo} alt="efood" />
      </S.LinkHome>
      <S.SocialMedia>
        <li>
          <a href="#" title="Visite a nossa página do instagram">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#" title="Visite a nossa página do facebook">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#" title="Visite a nossa página do twitter">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </S.SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </S.FooterContainer>
  </S.FooterPag>
)

export default Footer
