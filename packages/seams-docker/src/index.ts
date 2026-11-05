export interface ImageReference {
  readonly repository: string
  readonly tag: string
}

export interface BuiltImages {
  readonly images: readonly ImageReference[]
}

export interface SeamsDocker {
  readonly build: () => BuiltImages
}

export const createSeamsDocker = (): SeamsDocker => ({
  build: () => ({ images: [] }),
})
