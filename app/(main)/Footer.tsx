import { count, isNotNull } from 'drizzle-orm'
import Link from 'next/link'
import React from 'react'

import { CursorClickIcon, UsersIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { Container } from '~/components/ui/Container'
import { kvKeys } from '~/config/kv'
import { navigationItems } from '~/config/nav'
import { db } from '~/db'
import { subscribers } from '~/db/schema'
import { env } from '~/env.mjs'
import { prettifyNumber } from '~/lib/math'
import { redis } from '~/lib/redis'

import { Newsletter } from './Newsletter'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-lime-500 dark:hover:text-lime-400"
    >
      {children}
    </Link>
  )
}

function Links() {
  return (
    <nav className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      {navigationItems.map(({ href, text }) => (
        <NavLink key={href} href={href}>
          {text}
        </NavLink>
      ))}
    </nav>
  )
}

async function TotalPageViews() {
  let views: number
  if (env.VERCEL_ENV === 'production') {
    views = await redis.incr(kvKeys.totalPageViews)
  } else {
    views = 345678
  }

  return (
    <span className="flex items-center justify-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 md:justify-start">
      <UsersIcon className="h-4 w-4" />
      <span title={`${Intl.NumberFormat('en-US').format(views)}次浏览`}>
        总浏览量&nbsp;
        <span className="font-medium">{prettifyNumber(views, true)}</span>
      </span>
    </span>
  )
}

type VisitorGeolocation = {
  country: string
  city?: string
  flag: string
}
async function LastVisitorInfo() {
  let lastVisitor: VisitorGeolocation | undefined = undefined
  if (env.VERCEL_ENV === 'production') {
    const [lv, cv] = await redis.mget<VisitorGeolocation[]>(
      kvKeys.lastVisitor,
      kvKeys.currentVisitor
    )
    lastVisitor = lv
    await redis.set(kvKeys.lastVisitor, cv)
  }

  if (!lastVisitor) {
    lastVisitor = {
      country: 'US',
      flag: '🇺🇸',
    }
  }

  return (
    <span className="flex items-center justify-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 md:justify-start">
      <CursorClickIcon className="h-4 w-4" />
      <span>
        最近访客来自&nbsp;
        {[lastVisitor.city, lastVisitor.country].filter(Boolean).join(', ')}
      </span>
      <span className="font-medium">{lastVisitor.flag}</span>
    </span>
  )
}

export async function Footer() {
  const [subs] = await db
    .select({
      subCount: count(),
    })
    .from(subscribers)
    .where(isNotNull(subscribers.subscribedAt))

//   return (
//     <footer className="mt-32">
//       <Container.Outer>
//         <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
//           <Container.Inner>
//             <div className="mx-auto mb-8 max-w-md">
//               <Newsletter subCount={`${subs?.subCount ?? '0'}`} />
//             </div>
//             <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
//               <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
//                 &copy; {new Date().getFullYear()} 网站基于 Cali Castle. 网站已开源：
//                 <PeekabooLink href="https://github.com/CaliCastle/cali.so">
//                   GitHub
//                 </PeekabooLink>
//               </p>
//               <Links />
//             </div>
//           </Container.Inner>
//           <Container.Inner className="mt-6">
//             <div className="flex flex-col items-center justify-start gap-2 sm:flex-row">
//               <React.Suspense>
//                 <TotalPageViews />
//               </React.Suspense>
//               <React.Suspense>
//                 <LastVisitorInfo />
//               </React.Suspense>
//             </div>
//           </Container.Inner>
//         </div>
//       </Container.Outer>
//     </footer>
//   )
// }

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
              {/* GENERAL 列 */}
              <div>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  GENERAL
                </h2>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-lime-400 hover:text-lime-600 transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-lime-400 hover:text-lime-600 transition-colors">About</Link></li>
                  <li><Link href="/blogs" className="text-lime-400 hover:text-lime-600 transition-colors">Blogs</Link></li>
                  <li><Link href="/projects" className="text-lime-400 hover:text-lime-600 transition-colors">Projects</Link></li>
                  <li><Link href="/snippets" className="text-lime-400 hover:text-lime-600 transition-colors">Snippets</Link></li>
                </ul>
              </div>

              {/* SPECIFICS 列 */}
              <div>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  SPECIFICS
                </h2>
                <ul className="space-y-2">
                  <li><Link href="/sponsors" className="text-lime-400 hover:text-lime-600 transition-colors">Sponsors</Link></li>
                  <li><Link href="/journey" className="text-lime-400 hover:text-lime-600 transition-colors">My Journey</Link></li>
                  <li><Link href="/hire-me" className="text-lime-400 hover:text-lime-600 transition-colors">Hire me</Link></li>
                  <li><Link href="/resume" className="text-lime-400 hover:text-lime-600 transition-colors">Resume</Link></li>
                  <li><Link href="/newsletter" className="text-lime-400 hover:text-lime-600 transition-colors">Newsletter</Link></li>
                </ul>
              </div>

              {/* Newsletter 组件占用两列 */}
              <div className="sm:col-span-2">
                <Newsletter subCount={`${subs?.subCount ?? '0'}`} />
              </div>
            </div>

            {/* 底部版权信息和链接 */}
            <div className="mt-16 flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
                &copy; {new Date().getFullYear()} 网站基于 Cali Castle. 已开源：
                <PeekabooLink href="https://github.com/CaliCastle/cali.so">
                  GitHub
                </PeekabooLink>
              </p>
              <Links />
            </div>

            {/* <Container.Inner className="mt-6">
              <div className="flex flex-col items-center justify-start gap-2 sm:flex-row">
                <React.Suspense>
                  <TotalPageViews />
                </React.Suspense>
                <React.Suspense>
                  <LastVisitorInfo />
                </React.Suspense>
              </div>
            </Container.Inner> */}
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

