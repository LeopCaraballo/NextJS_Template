'use client'
import { FC, useEffect, useState } from 'react'
import { darkTheme } from '@/styles/themes/darkTheme'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import { useLocalStorage } from 'usehooks-ts'
import { FaMoon, FaSun } from 'react-icons/fa'

interface ThemeSwitcherProps {
  size?: number
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ size = 10 }) => {
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme)

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  useEffect(() => {
    if (theme.name === 'dark') {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [theme.name])

  return (
    <button
      style={{ cursor: 'pointer' }}
      onClick={() => setTheme(isDarkMode ? defaultTheme : darkTheme)}
    >
      {isDarkMode ? <FaSun size={size} /> : <FaMoon size={size} />}
    </button>
  )
}
export default ThemeSwitcher
