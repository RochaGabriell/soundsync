import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  color: #e74c3c;
  margin-bottom: 10px;
`

const NotFoundText = styled.p`
  font-size: 1.2rem;
  color: #333;
`

const ButtonPrevious = styled(Link)`
  background-color: #30d042;
  border: 1px solid #8edb82;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
`

export { NotFoundContainer, NotFoundTitle, NotFoundText, ButtonPrevious }