'use client'

import { useEffect, useState } from 'react'
import { SongType } from '~/types/search'
import { useRouter, useSearchParams } from 'next/navigation'
import useSpotify from '~/api/spotify'
import { Link } from '@nextui-org/react'

const Page: React.FC = () => {
  const [song, setSong] = useState<SongType>()

  const { getSong } = useSpotify

  const router = useRouter()
  const params = useSearchParams()
  const id = params.get('id')

  useEffect(() => {
    const getSongData = async () => {
      if (typeof id === 'string') {
        const data = await getSong(id)
        setSong(data)
      } else if (Array.isArray(id)) {
        const data = await getSong(id[0])
        setSong(data)
      }
    }
    if (id) {
      getSongData()
    }
  }, [])

  return (
    <div className="flex flex-col gap-8 bg-white px-10 pt-10 text-black">
      <Link href="/search">Back to search</Link>
      {song && (
        <>
          <span className="text-2xl font-bold">{song.name}</span>
          <span className="text-lg">
            {song.artists.map((song) => song.name).join(',')}
          </span>
          <span className="text-lg">
            <span className="font-bold">Album: </span>
            {song.album.name}
          </span>
        </>
      )}
    </div>
  )
}

export default Page
