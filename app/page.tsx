import ThemeProvider from '@/components/theme-provider'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <div className="card bg-info gap-4 p-4">
        <div className="select-none">
          <Link
            href="https://github.com/Xarunoba/nextjs-daisyui-ssr"
            target="_blank"
            rel="nofollow"
          >
            <Image
              src="/daisyui-logotype.svg"
              alt="daisyUI Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-64 h-auto"
              priority
            />
            <p className="text-center text-4xl font-black text-black">SSR</p>
          </Link>
        </div>

        <ThemeProvider />

        <div className="select-none flex gap-4 justify-between">
          <Link href="https://nextjs.org" target="_blank" rel="nofollow">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-16 h-auto"
            />
          </Link>
          <Link href="https://vercel.com/" target="_blank" rel="nofollow">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-16 h-auto"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
