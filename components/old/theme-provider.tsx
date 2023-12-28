import { cookies } from 'next/headers'
import ThemeSwitcher from './theme-switcher'
import Tailwind from '@/tailwind.config'

// This is the component that you'll put in your page/header/any area.
export default function ThemeProvider() {
  const theme = Tailwind.daisyui.themes
  const themeCookie = cookies().get('theme')
  const currentTheme = themeCookie ? themeCookie.value : theme[0]
  return <ThemeSwitcher theme={currentTheme} list={theme} />
}
