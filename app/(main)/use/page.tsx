import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import CardView from '../projects/Card'

const title = 'AMA 一对一咨询'
const description =
  'Cali 提供一对一的咨询服务（Ask Me Anything）。我有前端开发、全栈开发、UI/UX 设计、创业经验、英语技能、美国留学与工作、内容创作等经验，可以为你解答相关的问题，我也支持纯英语沟通。'

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
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Fouces WC
        </h1>
        {/* <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>入职大风线 </Balancer>
        </p> */}
      </header>
      
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
          <CardView /> 
      </div> 
    </Container>
  )
}
