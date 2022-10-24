import { Fragment } from "react"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment> {/* Retornar múltiplos elementos */}
      <Component {...pageProps} /> {/* Components */}
    </Fragment>
  )
}

export default MyApp