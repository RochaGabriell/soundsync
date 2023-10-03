import React from 'react'
import { Container, Search, Title } from './styles'

interface headerProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
  title: {
    method: string
    methodRequired: string
  }
}

const Header = ({ setSearch, title }: headerProps) => {

  function getTitle(): string | undefined{
    if (title.method === 'artist.search') {
      return 'Artistas'
    } else if (title.method === 'album.search') {
      return 'Álbuns'
    } else if (title.method === 'track.search') {
      return 'Músicas'
    } else if (title.method === 'artist.gettopalbums') {
      return 'Top Álbuns do Artista'
    } else if (title.method === 'chart.gettopartists') {
      return 'Top Artistas'
    } else if (title.method === 'chart.gettoptracks') {
      return 'Top Músicas'
    }
  }

  return (
    <Container>
      <Search>
        {title.methodRequired === '' ? null :
          <input
            type="text"
            placeholder={`Pesquise por um ${getTitle()?.toLowerCase()}`}
            onChange={(e) => setSearch(e.target.value)}
          />}
      </Search>
      <Title>{getTitle()}</Title>
    </Container>
  )
}

export default Header