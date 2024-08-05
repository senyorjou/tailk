import { Layout } from '../components/layout'
import { Menu } from '../components/menu'

const url = 'https://live.trading212.com/api/v0/equity/account/info'

const getAccountInfo = async () => {
  console.log('Making call to API')
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: Bun.env.T212_APIKEY,
    },
  })

  console.log('Return data from API')

  return await response.json()
}

export const Config = async () => {
  const account = await getAccountInfo()
  console.log('DEBUG <account>: ', account)
  return (
    <Layout>
      <Menu />
      <main class="container">
        <div class="grid">
          <div>Account info</div>
          <div>
            <div>ID: {account.id}</div>
            <div>Currency: {account.currencyCode}</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
