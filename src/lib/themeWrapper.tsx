'use client'

import GlobalStyle from '@/styles/globalStyles'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'

export default function GlobalThemeWrapper({ children }: { children: ReactNode }) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
