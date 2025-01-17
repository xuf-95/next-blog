import Image from 'next/image'
import React from 'react'

import { BriefcaseIcon } from '~/assets'

type Resume = {
  company: string
  title: string
  start: string
  end?: string | null
  logo: string
}

export function Resume({ resume }: { resume: Resume[] }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">工作经历</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-8 w-8 rounded-full"
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">公司</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">职位</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">日期</dt>
              <dd className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80">
                {role.start}
                <span aria-hidden="true">—</span> {role.end ?? '至今'}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* 添加 Resume 按钮 */}
      <div className="mt-6 text-center">
        <a
          href="/resume.pdf" // 替换为实际的 PDF 路径
          target="_blank"
          rel="noopener noreferrer"
          // className="inline-flex items-center justify-center rounded-lg bg-gray-700 px-32 py-2 text-sm font-medium text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:ring-offset-zinc-900"
          className='group mt-6 w-full bg-primary-200 font-medium border border-primary-300 text-zinc-900 hover:bg-primary-300 active:bg-primary-100 active:text-zinc-900/60 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-50 dark:active:bg-zinc-900 dark:active:text-zinc-50/70 dark:border-zinc-800 inline-flex items-center gap-1 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none'
        >
          Resume
        </a>
      </div>
    </div>
  )
}
