import axios from 'axios'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export function HandleRedirect() {
  /**
   * Hooks.
   */
  const history = useHistory()
  const { shortUrl } = useParams<{ shortUrl: string }>()

  /**
   * Effects.
   */
  useEffect(() => {
    async function getData() {
      const url = `https://minis-url.herokuapp.com/${shortUrl}`
      await axios
        .get(url)
        .then(res => window.location.replace(res.data))
        .catch(() => history.push('/'))
    }
    getData()
  }, [history, shortUrl])

  return <></>
}
