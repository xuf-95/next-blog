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

import BlurFade from "~/components/magicui/blur-fade";
import { Badge } from "~/components/ui/badge";
import { DATA } from "~/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default async function BlogHomePage() {
  const settings = await getSettings()

  return (
    <>
      <Container className="mt-10">
        <Headline />
      </Container>

      {settings?.heroPhotos && <Photos photos={settings.heroPhotos} />}

      <Container className="mt-12 md:mt-20">
        {/* <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
            <WobbleCardDemo />     
        </div> */}

        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-6 pt-6">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <h2 className="text-xl font-bold">Recent Posts</h2>
            </h2>
            <BlogPosts />
          </div>
          <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
            <div className="flex flex-col gap-6 pt-6">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <h2 className="text-xl font-bold">Experience</h2>
              </h2>
              {settings?.resume && <Resume resume={settings.resume} />}
              {settings?.education && <Education education={settings.education} />}
              {/* <Newsletter /> */}
            </div>

            <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-bold">Skills</h2>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                    <Badge 
                      className="bg-white text-gray-800 shadow-sm border border-gray-200" // 新增样式
                    >
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>
          </aside>
        </div>

      </Container>
    </>
  )
}

export const revalidate = 60
