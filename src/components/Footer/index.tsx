import { FooterPag, FooterContainer, SocialMedia, LinkHome } from './styles'

import logo from '../../assets/image/logo.svg'
import instagram from '../../assets/image/instagram.svg'
import facebook from '../../assets/image/facebook.svg'
import twitter from '../../assets/image/twitter.svg'

const Footer = () => (
  <FooterPag>
    <FooterContainer className="container">
      <LinkHome to="/">
        <img src={logo} alt="efood" />
      </LinkHome>
      <SocialMedia>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
      </SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </FooterContainer>
  </FooterPag>
)

export default Footer
