import styled from 'styled-components'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import useAxios from '../../hooks/useAxios'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1ed760;
  height: 100%;
`

const Container = styled.div`
  display: flex;
`

const Base = () => {
  const [search, setSearch] = useState('');
  const [selectedMethod, setSelectedMethod] = useState({ method: 'artist.search', methodRequired: 'artist' })

  const urls = [
    {
      method: 'artist.search',
      methodRequired: 'artist',
    },
    {
      method: 'album.search',
      methodRequired: 'album',
    },
    {
      method: 'track.search',
      methodRequired: 'track',
    },
    {
      method: 'artist.gettopalbums',
      methodRequired: 'artist',
    },
    {
      method: 'chart.gettopartists',
      methodRequired: '',
    },
    {
      method: 'chart.gettoptracks',
      methodRequired: '',
    },
  ]

  const handleMethodClick = (methodName) => {
    setSelectedMethod(methodName);
  }

  return (
    <ContentWrapper>  
      <Header setSearch={setSearch} title={selectedMethod} />
      <Container>
        <Sidebar
          urls={urls}
          selectedMethod={selectedMethod}
          handleMethodClick={handleMethodClick}
        />
        <Outlet context={{ search, selectedMethod }} />
      </Container>
    </ContentWrapper>
  )
}

export default Base
