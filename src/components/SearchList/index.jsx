import { useOutletContext } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'

import { ContentWrapper, Alert } from './styles'
import RenderCard from '../RenderCard'

const SearchList = () => {

  const { search, selectedMethod } = useOutletContext()
  const { method, methodRequired } = selectedMethod

  const queryParams = search
    ? `?method=${method}&${methodRequired}=${search}`
    : method === 'chart.gettopartists'
      ? `?method=${method}`
      : method === 'chart.gettoptracks'
        ? `?method=${method}`
        : null

  const { data, error, loading } = useAxios(queryParams)

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