import { GlobalStyles, defaultTheme } from './styles'

import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
