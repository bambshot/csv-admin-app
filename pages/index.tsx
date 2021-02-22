import { useCallback } from 'react'
import Head from 'next/head'
import useAspidaSWR from '@aspida/swr'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { apiClient } from '~/utils/apiClient'
import Layout from '~/components/Layout'
import IssuesTable from '~/components/IssuesTable'
import type { ChangeEvent } from 'react'

const Home = () => {
  const { data: issues, error, revalidate } = useAspidaSWR(apiClient.issues)

  const insertIssues = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return

    await apiClient.issues.$post({ body: { csv: e.target.files[0] } })
    revalidate()
  }, [])

  if (error) return <div>failed to load</div>
  if (!issues) return <div>loading...</div>

  return (
    <Layout>
      <Head>
        <title>CSV Admin App</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <main>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          component="label"
        >
          CSVをアップロード
          <input type="file" accept=".csv" onChange={insertIssues} hidden />
        </Button>
        <IssuesTable data={issues} />
      </main>
    </Layout>
  )
}

export default Home
