import React from 'react'

import { BlogPosts } from '~/app/(main)/blog/BlogPosts'
import { Headline } from '~/app/(main)/Headline'
import { Newsletter } from '~/app/(main)/Newsletter'
import { Photos } from '~/app/(main)/Photos'
import { Resume } from '~/app/(main)/Resume'
import { Education } from '~/app/(main)/Education'
import { PencilSwooshIcon } from '~/assets'
import { SunIcon } from '~/assets'
import { Container } from '~/components/ui/Container'
import { getSettings } from '~/sanity/queries'
import {WobbleCardDemo} from './about/WobbleCardDemo'



export default async function BlogHomePage() {
  const settings = await getSettings()

  return (
    <>
      <Container className="mt-10">
        <Headline />
      </Container>

      {settings?.heroPhotos && <Photos photos={settings.heroPhotos} />}

      <Container className="mt-12 md:mt-28">
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
            <WobbleCardDemo />     
        </div>

        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-6 pt-6">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <PencilSwooshIcon className="h-5 w-5 flex-none" />
              <span className="ml-2">Recent Posts</span>
            </h2>
            <BlogPosts />
          </div>
          <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
            <div className="flex flex-col gap-6 pt-6">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <SunIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">Experience</span>
              </h2>
              {settings?.resume && <Resume resume={settings.resume} />}
              {settings?.education && <Education education={settings.education} />}
              {/* <Newsletter /> */}
            </div>
          </aside>
        </div>

      </Container>
    </>
  )
}

export const revalidate = 60
