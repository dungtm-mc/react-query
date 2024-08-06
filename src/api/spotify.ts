import qs from 'qs'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET

const getAccessToken = async () => {
  const url = 'https://accounts.spotify.com/api/token'

  const data = qs.stringify({
    grant_type: 'client_credentials'
  })

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: data
    })

    if (!response.ok) {
      throw new Error('Failed to get access token')
    }

    const responseData = await response.json()
    return responseData.access_token
  } catch (error) {
    console.error('Error getting access token', error)
    throw new Error('Failed to get access token')
  }
}

const useSpotify = {
  search: async (query: string) => {
    const accessToken = await getAccessToken()

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }

    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      })

      if (!response.ok) {
        throw new Error('Failed to search tracks')
      }

      const responseData = await response.json()
      return responseData.tracks.items
    } catch (error) {
      console.error('Error searching tracks', error)
      throw new Error('Failed to search tracks')
    }
  },

  getSong: async (id: string) => {
    const accessToken = await getAccessToken()

    const headers = {
      Authorization: `Bearer ${accessToken}`
    }

    const url = `https://api.spotify.com/v1/tracks/${id}`

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      })

      if (!response.ok) {
        throw new Error('Failed to get track')
      }

      const responseData = await response.json()
      return responseData
    } catch (error) {
      console.error('Error getting track', error)
      throw new Error('Failed to get track')
    }
  }
}

export default useSpotify
