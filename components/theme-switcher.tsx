import { cookies } from 'next/headers'
import Tailwind from '@/tailwind.config'

export default async function ThemeSwitcher() {
  const theme = Tailwind.daisyui.themes
  const themeCookie = cookies().get('theme')
  const currentTheme = themeCookie ? themeCookie.value : theme[0]

  // Using server actions to toggle theme
  async function toggleTheme() {
    'use server'

    const theme = Tailwind.daisyui.themes
    const themeCookie = cookies().get('theme')
    const currentTheme = themeCookie ? themeCookie.value : theme[0]

    const currentIndex = theme.indexOf(currentTheme)
    if (currentIndex === theme.length - 1) {
      cookies().set('theme', theme[0], {
        expires: new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000),
      })
    } else if (currentIndex >= 0 && currentIndex < theme.length) {
      cookies().set('theme', theme[currentIndex + 1], {
        expires: new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000),
      })
    } else {
      cookies().set('theme', theme[0], {
        expires: new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000),
      })
    }
  }

  return (
    <form action={toggleTheme} className="block">
      <button type="submit" className={'btn btn-primary w-full'}>
        {currentTheme}
      </button>
    </form>
  )
}
