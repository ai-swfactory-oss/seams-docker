import type { BuiltImages, SeamsDocker } from '../index'

export const createFakeSeamsDocker = (result: BuiltImages = { images: [] }): SeamsDocker => ({
  build: () => result,
})
