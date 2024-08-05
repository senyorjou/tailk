import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/drizzle-migrations',
  dbCredentials: {
    url: 'data.db',
  },
  dialect: 'sqlite', // 'postgresql' | 'mysql' | 'sqlite'
})
