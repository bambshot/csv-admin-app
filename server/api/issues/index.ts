import { Issues } from '$prisma/client'

export type Methods = {
  get: {
    query?: {
      limit?: number
    }
    resBody: Issues[]
  }

  post: {
    reqFormat: FormData
    reqBody: { csv: Blob }
    resBody: Issues[]
  }

  delete: {
    status: 204
  }
}
