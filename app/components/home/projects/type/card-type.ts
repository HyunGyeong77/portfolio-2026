import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type CardType = {
  title: string
  describe: string
  skills: string[]
  tags: string[]
  githubUrl: string
  visitUrl: string
  bg: StaticImport
}