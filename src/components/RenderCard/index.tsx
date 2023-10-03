import { Card } from './styles'

interface itemProps {
  item: {
    name: string
    artist?: {
      name: string
    } | string
    image: {
      '#text': string
    }[]
    listeners?: string
    playcount?: string
  }
}

const RenderCard = ({ item }: itemProps) => {
  return (
    <Card>
      <img src={item.image[2]['#text']} alt={item.name} />
      <h2>{item.name}</h2>
      {
        typeof item.artist === 'object' ?
          <p>{item.artist.name}</p>
          :
          <p>{item.artist}</p>
      }
      {item.listeners &&
        <>
          <label>Ouvintes</label>
          <p>{item.listeners}</p>
        </>
      }
      {item.playcount &&
        <>
          <label>Reproduções</label>
          <p>{item.playcount}</p>
        </>
      }
    </Card>
  )
}

export default RenderCard