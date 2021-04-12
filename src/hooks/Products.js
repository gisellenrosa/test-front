import { useState, useEffect } from 'react'
import axios from 'axios'

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.items)
      })
      .catch((err) => {
        alert(err)
      })
  }, [url])

  return data
}
export default useRequestData
