import {useEffect, useState} from 'react'
import axios from 'axios'

const FetchPostuseState = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      setLoading(false)
      setError('')
      setPost(response.data)
    })
    .catch((err)=> {
      setLoading(false)
      setPost({})
      setError('Oops. Something went wrong!')
    })
  }, [])

    return (
        <div>
          {loading ? 'Loading': post.title}
          {error ? error: null }
        </div>
    )
}

export default FetchPostuseState
