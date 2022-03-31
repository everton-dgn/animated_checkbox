import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Default } from 'layouts'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store/configStore'
import GlobalStyles from 'styles/GlobalStyles'
import { Page } from 'types/page'
import * as C from 'components'

type Props = AppProps & { Component: Page }

export default function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Default
  return (
    <C.ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
            <GlobalStyles />
          </Layout>
        </PersistGate>
      </Provider>
    </C.ErrorBoundary>
  )
}
