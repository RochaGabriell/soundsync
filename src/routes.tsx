import { createBrowserRouter } from 'react-router-dom'
import Base from './pages/Base'
import SearchList from './components/SearchList'
import NotFound from './pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <SearchList />
      },
    ]
  }
])

export default routes