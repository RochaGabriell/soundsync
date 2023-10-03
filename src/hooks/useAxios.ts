import { useState, useEffect } from 'react'

import api from '../services/api'

type UseAxios<T> = {
  data: T
  error: Error
  loading: boolean
}

function useAxios<T>(url: string): UseAxios<T>{
  const [data, setData] = useState<T>({} as T)
  const [error, setError] = useState<Error|any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!url) {
      setData({} as T)
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        const response = await api(url)
        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, error, loading }
}

export default useAxios
