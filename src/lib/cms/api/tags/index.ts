import { ContentsQuery, EndPoints } from 'src/lib/cms/types'

export type Methods = {
  get: {
    query?: ContentsQuery
    resBody: EndPoints['gets']['tags']
  }
}