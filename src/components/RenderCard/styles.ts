import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  min-height: 230px;
  max-height: 280px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 10px;
  }

  h2, p, label {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  label {
    font-size: 0.7rem
  }

  h2 {
    font-size: 1rem;
    margin: 10px 0;
  }

  p {
    font-size: 0.7rem;
  }
`

export { Card }