import Head from 'next/head'
import { useCallback } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
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
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div>
          <input type="file" accept=".csv" onChange={insertIssues} />
        </div>
        <div>
          <ul className={styles.tasks}>
            {issues.map((issue) => (
              <li key={issue.id}>
                <span>{issue.title}</span> <span>{issue.type}</span>{' '}
                <span>{issue.category}</span>
                <br />
                <span>{issue.start_date}</span>
                <br />
                <span>{issue.due_date}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
