import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { Footer } from '../../components/Footer'
export const PublicLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet /> 
      <Footer />
    </Container>
  )
}

