import NavButton from "./NavButton"
import KahnGradientSVG from "./KahnGradientSVG"
import BurgerMenuGradientSVG from "./BurgerMenuGradientSVG"
import EssenGradientSVG from "./EssenGradientSVG"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid className='navbar'>
        <Row>
          <Col>
            <NavButton Icon={BurgerMenuGradientSVG}/>
          </Col>
          <Col>
            <NavButton Icon={BurgerMenuGradientSVG}/>
          </Col>
          <Col>
            <NavButton Icon={EssenGradientSVG}/>
          </Col>
          <Col>
            <NavButton Icon={KahnGradientSVG}/>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
