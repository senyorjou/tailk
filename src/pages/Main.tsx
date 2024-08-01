import { Layout } from '../components/Layout'

export const Main = () => {
  return (
    <Layout >
      <main >
        <form       >
          <fieldset>
            <textarea name="question" placeholder="What's on your mind..." >
            </textarea>
          </fieldset>

          <input type="button" value="Ask" />
          <fieldset>
            <textarea name="answer" readonly>
            </textarea>
          </fieldset>


        </form>

      </main>
    </Layout>
  )
}
