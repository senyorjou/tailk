import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const config = sqliteTable('config', {
  id: integer('id').primaryKey(),
  apiKey: text('api_key'),
  account: integer('account'),
  currencyData: text('currency_data'),
})
