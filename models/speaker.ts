import { StaticImport } from "next/dist/shared/lib/get-img-props"

type ImageSize = {
    height: number,
    width: number
}

export type Speaker = {
    srcImageStartUp: string | StaticImport,
    imageStartUpSize: ImageSize,
    srcImageProfile: string | StaticImport,
    description: string
    name: string,
}