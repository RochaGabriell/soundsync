import { Card } from "./styles"

const RenderCard = ({ item }) => {
  return (
    <Card>
      <img src={item.image[2]['#text']} alt={item.name} />
      <h2>{item.name}</h2>
      {item.artist && <p>{item.artist.name}</p>}
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