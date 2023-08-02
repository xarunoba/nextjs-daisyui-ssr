import { cookies } from 'next/headers'
import ThemeSwitcherClient from './theme-switcher'
import Themes from '@/utils/themes'

// This is the component that you'll put in your page/header/any area.
export default function ThemeSwitcher() {
  const themeCookie = cookies().get('theme')
  const currentTheme = themeCookie ? themeCookie.value : Themes[0]
  return <ThemeSwitcherClient theme={currentTheme} list={Themes} />
}
