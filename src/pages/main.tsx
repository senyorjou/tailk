import { Layout } from '../components/layout'
import { Menu } from '../components/menu'

export const Main = () => {
  return (
    <Layout>
      <Menu />
      <main class="container">
        <form>
          <fieldset>
            <textarea
              name="question"
              placeholder="What's on your mind..."
            ></textarea>
          </fieldset>

          <input type="button" value="Ask" />
          <fieldset>
            <textarea name="answer" readonly></textarea>
          </fieldset>
        </form>
      </main>
    </Layout>
  )
}
