import { html } from 'hono/html'

export const Layout = (props: { children?: any }) => {
  return html`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tailk</title>
        <link rel="stylesheet" href="/static/css/pico.css" />
      </head>
      <body class="container">
        <header>
          <h1><a href="/">Just tailk...</a></h1>
        </header>
        ${props.children}
        <footer>
          <p>Built with a coffee</p>
        </footer>
      </body>
    </html>`
}
