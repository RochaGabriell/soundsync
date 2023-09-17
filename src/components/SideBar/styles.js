import styled from 'styled-components'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  background-color: #292929;
  color: #fff;
  padding: 10px;
  height: 100%;
`

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #555;
  }
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
`

export { SidebarWrapper, SidebarItem, Icon }