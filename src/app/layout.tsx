import StyledComponentsRegistry from '@/lib/registry'
import GlobalThemeWrapper from '@/lib/themeWrapper'
import type { Metadata } from 'next'
import { Encode_Sans } from 'next/font/google'
import { ReactNode } from 'react'

const encodeSans = Encode_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leopoldo Caraballo',
  description: 'Leopoldo Caraballo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={encodeSans.className}>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>{children}</GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
