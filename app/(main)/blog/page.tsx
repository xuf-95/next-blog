import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  'I like to write about stuff I am into. You will find a mix of web dev articles, tech news, and random thoughts from my life. Use the search below to filter by title.'
export const metadata = {
  title: 'Blogs',
  description,
  openGraph: {  
    title: 'Blogs',
    description,
  },
  twitter: {
    title: 'Blogs',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Blogs
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          {/* <Balancer>{description}</Balancer> */}
          <b>Blog columns mainly record related topics of work and life, such as technical precipitation, personal learning, life essays, and so on.</b>
        </p>
        {/* <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p> */}
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60
