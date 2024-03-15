import { StaticImport } from "next/dist/shared/lib/get-img-props"

type ImageSize = {
    height: number,
    wight: number
}

export type Tutor = {
    srcImageStartUp: string | StaticImport,
    imageStartUpSize: ImageSize,
    srcImageProfile: string | StaticImport,
    description: string
    name: string,
}