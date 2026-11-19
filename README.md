# seams-docker

seams-docker is the seam for Docker buildx and OCI images: a typed SDK that the rest of the factory calls instead of shelling out to Docker directly, with a fake under `./testing` for tests.

This repository holds only the guarded skeleton so far: `createSeamsDocker` returns a seam that builds no images, and `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-docker`: the Docker buildx and OCI image seam (SDK), with a fake under `./testing`.

## Licence

MIT
