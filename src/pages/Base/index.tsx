import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Sidebar from '../../components/SideBar'
import {ContentWrapper, Container} from './styles'

type urlsMethod = {
  method: string
  methodRequired: string
}

const Base = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedMethod, setSelectedMethod] = useState<urlsMethod>({ method: 'artist.search', methodRequired: 'artist' })

  const urls: urlsMethod[] = [
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

  const handleMethodClick = (methodName: urlsMethod): void => {
    setSelectedMethod(methodName)
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
