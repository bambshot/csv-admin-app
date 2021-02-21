import { defineController } from './$relay'
import {
  convertCsvToJson,
  createIssues,
  readIssues,
  deleteAllIssues
} from '$/service/issues'

export default defineController(() => ({
  get: async () => ({ status: 200, body: await readIssues() }),
  post: async ({ body }) => {
    const targetIssues = await convertCsvToJson(body.csv)
    await createIssues(
      targetIssues.map((issue) => {
        issue.start_date = new Date(issue.start_date)
        issue.due_date = new Date(issue.due_date)
        return issue
      })
    )

    return { status: 201, body: targetIssues }
  },
  delete: async () => {
    await deleteAllIssues()
    return { status: 204 }
  }
}))
