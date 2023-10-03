import artist from '../../assets/artist.svg'
import album from '../../assets/album.svg'
import artistAlbum from '../../assets/artistAlbum.svg'
import track from '../../assets/track.svg'
import chart from '../../assets/chart.svg'

import { SidebarWrapper, SidebarItem, Icon } from './styles'

interface SideBarProps {
  urls: {
    method: string
    methodRequired: string
  }[]
  selectedMethod: {
    method: string
    methodRequired: string
  }
  handleMethodClick: (methodName: {
    method: string
    methodRequired: string
  }) => void
}

const Sidebar = ({ urls, selectedMethod, handleMethodClick }: SideBarProps) => {

  return (
    <SidebarWrapper>
      {urls.map((url) => (
        <SidebarItem
          key={url.method}
          onClick={() => handleMethodClick(url)}
          style={{
            backgroundColor:
              selectedMethod.method === url.method ? '#555' : 'transparent',
          }}>
          <Icon src={
            url.method === 'artist.search' ? artist :
              url.method === 'album.search' ? album :
                url.method === 'track.search' ? track :
                  url.method === 'artist.gettopalbums' ? artistAlbum :
                    url.method === 'chart.gettopartists' ? chart :
                      url.method === 'chart.gettoptracks' ? chart : ''
          } alt={url.method} />
        </SidebarItem>
      ))}
    </SidebarWrapper>
  )
}

export default Sidebar