import { darkTheme } from '@/styles/themes/darkTheme'
import { CSSProp, DefaultTheme } from 'styled-components'

type ThemeType = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
