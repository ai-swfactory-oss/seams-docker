# seams-docker

seams-docker is the seam for Docker buildx and OCI images: a typed SDK that the rest of the factory calls instead of shelling out to Docker directly, with a fake under `./testing` for tests.

Its code arrives by migration from the private monorepo `ai-swfactory/seams`; this repository currently holds the guarded skeleton only.

## Packages

- `@ai-swfactory-oss/seams-docker`: the Docker buildx and OCI image seam (SDK), with a fake under `./testing`.

## Licence

MIT
