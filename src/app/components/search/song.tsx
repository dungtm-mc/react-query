'use client'

import { SongType } from '~/types/search'
import { Link } from '@nextui-org/react'

interface SongProps {
  song: SongType
}

const Song: React.FC<SongProps> = ({ song }) => {
  return (
    <div className="w-full max-w-[800px]">
      <Link href={`/song?id=${song.id}`} className="w-full">
        <div className="w-full cursor-pointer rounded-md border border-gray-300 p-4 shadow-md">
          <div className="flex flex-col">
            <span className="text-lg">{song.name}</span>
            <span className="text-gray-600">
              {song.artists.map((artist) => artist.name).join(', ')}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Song
