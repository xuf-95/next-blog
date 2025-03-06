import React from 'react'

import { Container } from '~/components/ui/Container'
import { aboutMeHeadline, aboutParagraphs } from '~/config/infoConfig'
import portraitImage from '~/assets/PortraitA.png'
import Image from 'next/image'
import  SocialLink  from '~/components/links/iconLinks'
import { motion } from 'framer-motion'
import { Newsletter } from '~/app/(main)/Newsletter'
import { Resume } from '~/app/(main)/Resume'
import { Education } from '~/app/(main)/Education'
import settings from '~/.eslintrc.cjs'
import { SunIcon } from '~/assets'

import { type Metadata } from 'next'

import { getSettings } from '~/sanity/queries'

import CardView from '../projects/Card'
export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m XuFei. I live in Hangzhou City, where I design the future.',
}


export default async function About() {
  const aboutParagraphsSafe = aboutParagraphs || [];
  const settings = await getSettings()
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>

          <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
            <div className="flex flex-col gap-6 pt-6">
              {/* <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <SunIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">Experience</span>
              </h2> */}
              {/* {settings?.resume && <Resume resume={settings.resume} />} */}
              {/* {settings?.education && <Education education={settings.education} />} */}
              {/* <Newsletter /> */}
            </div>
          </aside>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {aboutMeHeadline}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            {/* {aboutParagraphs.map((paragraph, index) => (
               <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))} */}
            {aboutParagraphs.map((section, index) => {
              // 检查类型，如果是对象则渲染标题和内容
              if (typeof section === "object" && section.title) {
                return (
                  <div key={index}>
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                      {section.title}
                    </h2>
                    <p>{section.content}</p>
                  </div>
                );
              }

              // // 否则直接渲染段落
              // return (
              //   <p
              //     key={index}
              //     dangerouslySetInnerHTML={{ __html: section }}
              //   />
              // );
            })}
          </div>
          
          {/* <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
            <CardView /> 
          </div>  */}

        </div>
        
      </div>

      

      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
        {/* <WobbleCardDemo />      */}
      </div>
      
    </Container>
  )
}
