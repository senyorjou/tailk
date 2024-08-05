import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

import { Config, Main } from './pages'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/config', (c) => {
  return c.html(<Config />)
})

app.get('/', (c) => {
  return c.html(<Main />)
})

export default app
