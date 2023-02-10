const API_KEY: string = "c405ade3e8a84d04f27a3c73e361d4af"
const BASE_PATH: string = "https://api.themoviedb.org/3/"

export interface IMovieResult {
  dates: Dates
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export interface Dates {
  maximum: string
  minimum: string
}

export interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export function getMovies(): Promise<IMovieResult> {
  console.log(111)
  return fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}`).then((response) => response.json())
}

