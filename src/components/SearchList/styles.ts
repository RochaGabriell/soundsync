import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #292929;
  flex-wrap: wrap;
  width: 100%;
  height: 90vh;
  margin: 10px;
  padding-top: 30px;
  color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    width: 100%;
    text-align: center;
  }
`

export { ContentWrapper, Alert }