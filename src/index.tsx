import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

import { Main } from './pages/Main'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(<Main />)
})

export default app
