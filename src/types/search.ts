export type SearchResult = {
  id: string
  name: string
  artist: string[]
  image: string
  duration: number
}

export type ArtistType = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type AlbumType = {
  album_type: string
  artists: ArtistType[]
  available_markets: string[]
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  images: {
    height: number
    url: string
    width: number
  }[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export type SongType = {
  album: AlbumType
  artists: ArtistType[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: {
    isrc: string
  }
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string | null
  track_number: number
  type: string
  uri: string
}
