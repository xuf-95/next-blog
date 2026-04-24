import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'
import BlurFade from "~/components/magicui/blur-fade";
import { ProjectCard } from "~/app/(main)/projects/project-card";

import { DATA } from "~/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

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

    </Container>
  )
}

export const revalidate = 3600