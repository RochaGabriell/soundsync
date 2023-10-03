import { useOutletContext } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

import { ContentWrapper, Alert } from './styles'
import RenderCard from '../RenderCard'

interface outletContext {
  search: string,
  selectedMethod: {
    method: string
    methodRequired: string
  }
}

interface dataJSON {
  results: {
    artistmatches?: {
      artist?: {
        name: string
        image: {
          '#text': string
        }[]
      }[]
    }
    albummatches?: {
      album?: {
        name: string
        artist: string
        image: {
          '#text': string
        }[]
      }[]
    }
    trackmatches?: {
      track?: {
        name: string
        artist: string
        image: {
          '#text': string
        }[]
      }[]
    }
  }
  error: Error | any
  artists?: {
    artist?: {
      name: string
      image: {
        '#text': string
      }[]
    }[]
  }
  topalbums?: {
    album?: {
      name: string
      artist: {
        name: string
      }
      image: {
        '#text': string
      }[]
    }[]
  }
  tracks?: {
    track?: {
      name: string
      artist: {
        name: string
      }
      image: {
        '#text': string
      }[]
    }[]
  }
}

const SearchList = () => {

  const { search, selectedMethod } = useOutletContext<outletContext>()
  const { method, methodRequired } = selectedMethod

  const queryParams = search
    ? `?method=${method}&${methodRequired}=${search}`
    : method === 'chart.gettopartists'
      ? `?method=${method}`
      : method === 'chart.gettoptracks'
        ? `?method=${method}`
        : ''

  const { data, error, loading } = useAxios<dataJSON>(queryParams)

  console.log(data)
  
  return (
    <ContentWrapper>
      {loading && <Alert><p>Loading...</p></Alert>}
      {error && <Alert><p>Algo deu errado...</p></Alert>}

      {data && data.results && (
        <>
          {data.results.artistmatches?.artist?.map((artist, index) => (
            <RenderCard key={index} item={artist} />
          ))}
          {data.results.albummatches?.album?.map((album, index) => (
            <RenderCard key={index} item={album} />
          ))}
          {data.results.trackmatches?.track?.map((track, index) => (
            <RenderCard key={index} item={track} />
          ))}
        </>
      )}

      {data && data.error === 6 && <Alert><p>O ARTISTA QUE VOCÊ FORNECEU NÃO FOI ENCONTRADO</p></Alert>}

      {data && (
        <>
          {data.artists?.artist?.map((artist, index) => (
            <RenderCard key={index} item={artist} />
          ))}
          {data.topalbums?.album?.map((album, index) => (
            <RenderCard key={index} item={album} />
          ))}
          {data.tracks?.track?.map((track, index) => (
            <RenderCard key={index} item={track} />
          ))}
        </>
      )}
    </ContentWrapper>
  )
}

export default SearchList