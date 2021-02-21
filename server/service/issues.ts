import csv from 'csvtojson'
import { Issues, PrismaClient } from '@prisma/client'
import { Multipart } from 'fastify-multipart'

const prisma = new PrismaClient()

export const convertCsvToJson = async (
  csvFile: Multipart
): Promise<Issues[]> => {
  const csvString = (await csvFile.toBuffer()).toString()
  return await csv().fromString(csvString)
}

export const createIssues = async (issues: Issues[]) => {
  await prisma.$transaction(
    issues.map((issue) => {
      return prisma.issues.create({
        data: issue
      })
    })
  )
}

export const readIssues = async (limit?: number) =>
  (await prisma.issues.findMany()).slice(0, limit)

export const deleteAllIssues = async () => await prisma.issues.deleteMany({})
