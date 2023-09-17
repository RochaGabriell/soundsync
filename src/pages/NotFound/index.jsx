import { NotFoundContainer, NotFoundTitle, NotFoundText, ButtonPrevious } from './styles'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Página Não Encontrada</NotFoundTitle>
      <NotFoundText>A página que você está procurando não existe.</NotFoundText>
      <ButtonPrevious to="/">Voltar para Home</ButtonPrevious>
    </NotFoundContainer>
  )
}

export default NotFound