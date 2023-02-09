const IMAGE_PATH: string = "https://image.tmdb.org/t/p/"

export function makeImagePath(id: string, format?: string) {
  return `${IMAGE_PATH}/${format ? format : "original"}${id}`
}