import { Fragment } from "react"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment> {/* Retornar mĂșltiplos elementos */}
      <Component {...pageProps} /> {/* Components */}
    </Fragment>
  )
}

export default MyApp