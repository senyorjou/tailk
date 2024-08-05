export const Menu = (props: { children?: any }) => {
  //console.log(props.children)
  return (
    <section>
      <nav>
        <ul>
          <li>
            <strong>Your numbers</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/config">Config</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
