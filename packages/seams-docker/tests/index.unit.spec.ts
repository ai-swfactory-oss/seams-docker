import { describe, expect, it } from 'vitest'

import { createSeamsDocker } from '../src/index'
import { createFakeSeamsDocker } from '../src/testing/index'

describe('createSeamsDocker', () => {
  it('builds no images while the seam is a skeleton', () => {
    expect(createSeamsDocker().build()).toEqual({ images: [] })
  })
})

describe('createFakeSeamsDocker', () => {
  it('builds no images by default', () => {
    expect(createFakeSeamsDocker().build()).toEqual({ images: [] })
  })

  it('returns the result it was given', () => {
    const result = { images: [{ repository: 'ghcr.io/example/app', tag: 'latest' }] }
    expect(createFakeSeamsDocker(result).build()).toBe(result)
  })
})
