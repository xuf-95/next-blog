import { type Metadata } from 'next'
import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'
import { fetchGuestbookMessages } from '~/db/queries/guestbook'

import { Guestbook } from './Guestbook'

const title = '留言墙'
const description =
  '欢迎在这留下你的足迹足迹，有事可以通过我的联系方式联系我，请注明来意🌵'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default async function GuestBookPage() {
  const messages = await fetchGuestbookMessages()

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          👋 Hi, Friends
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {/* <Balancer>{description}</Balancer> */}
          <b>欢迎在这留下你的足迹足迹，有事可以通过我的联系方式联系我，请注明来意🌵</b>
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Guestbook messages={messages} />
      </div>
    </Container>
  )
}
