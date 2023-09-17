import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #292929;
  height: 10vh;
  padding: 0 20px;
`

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 10px;

  input {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    color: #1ed760;
    font-size: 1.2rem;
    font-weight: bold;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #1ed760;
    font-weight: bold;
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`

export { Container, Search, Title }