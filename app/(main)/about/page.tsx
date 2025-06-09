import React from 'react'

import { Container } from '~/components/ui/Container'
import { aboutMeHeadline, aboutParagraphs } from '~/config/infoConfig'
import portraitImage from '~/assets/PortraitAbout.jpg'
import Image from 'next/image'
import { type Metadata } from 'next'
import { getSettings } from '~/sanity/queries'
import CardView from '../projects/Card'

import BlurFade from "~/components/magicui/blur-fade";
import { Badge } from "~/components/ui/badge";
import { DATA } from "~/data/resume";
import { ResumeCard } from "~/components/resume-card";

import  SocialLink  from '~/components/links/iconLinks'
import { motion } from 'framer-motion'
import { Newsletter } from '~/app/(main)/Newsletter'
import { Resume } from '~/app/(main)/Resume'
import { Education } from '~/app/(main)/Education'
import settings from '~/.eslintrc.cjs'
import { SunIcon } from '~/assets'


const BLUR_FADE_DELAY = 0.04;


export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m XuFei. I live in Hangzhou City, where I design the future. Currently in the stage of personal career exploration, seeking cooperation',
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
          <h4 className="text-1xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
            {aboutMeHeadline}
          </h4>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
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
            })}
          </div>
        </div>        
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
      
    </Container>
  )
}
