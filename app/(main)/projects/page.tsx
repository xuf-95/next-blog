import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'
import CardView from './Card'


import BlurFade from "~/components/magicui/blur-fade";
import { ProjectCard } from "~/app/(main)/projects/project-card";
import { Badge } from "~/components/ui/badge";
import { DATA } from "~/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;


const title = '我的项目'
const description =
  '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。'
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

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <b>Collections of my open-source side projects, along with some cool things I’ve built with colleagues at work. It’s a mix of passion projects and practical tools—some just for fun, others to solve real-world problems.</b>
        </p>
      </header>
      {/* <h2 className="mt-6 flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          <CustomIcon name='coffee' size={28}/>
            Work Projects
       </h2> */}
      {/* <div className="mt-8 sm:mt-10">
        <Projects />
      </div> */}


      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-[1200px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard 
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

      {/* <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <CustomIcon name='github' size={28}/>
            Open Source
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {githubProjects.map((project) => (
              <GithubProjectCard key={project.name} project={project} titleAs='h3'/>
            ))}
          </ul>
        </div> */}

      {/* <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 border-t border-zinc-100 py-8 dark:border-zinc-700/40"> 
          <CardView /> 
      </div>  */}
    </Container>
  )
}

export const revalidate = 3600