'use client'

import { Button, Input } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'
import useSpotify from '~/api/spotify'
import { SongType } from '~/types/search'
import Song from '../components/search/song'
import { useQuery } from 'react-query'

const Page: React.FC = () => {
  const { search } = useSpotify

  const [searchData, setSearchData] = useState('')

  const fetchSongs = async () => {
    if (!searchData) return []
    const data = await search(searchData)
    return data
  }

  const { data, error, isLoading, refetch } = useQuery(
    ['search', searchData],
    fetchSongs
  )

  const handleSearch = async () => {
    refetch()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value)
  }

  return (
    <div className="flex min-h-screen bg-white px-10 text-black">
      <div className="mx-auto mt-10 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Find your favorite songs here</h1>
        <div className="flex gap-2">
          <Input
            size="md"
            type="text"
            placeholder="Find your song..."
            color="default"
            labelPlacement="outside-left"
            variant="bordered"
            radius="full"
            value={searchData}
            onChange={handleChange}
          />
          <Button
            size="md"
            color="default"
            radius="full"
            onPress={handleSearch}
          >
            Search
          </Button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Something happen!</p>
        ) : (
          <div className="flex flex-col gap-4">
            {data &&
              data.map((song: SongType) => <Song song={song} key={song.id} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
