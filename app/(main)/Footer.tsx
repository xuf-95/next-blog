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
import { SocialLink } from '~/components/links/SocialLink'
import { motion } from 'framer-motion'

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
export async function Footer() {
  const [subs] = await db
    .select({
      subCount: count(),
    })
    .from(subscribers)
    .where(isNotNull(subscribers.subscribedAt))

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="grid grid-cols-3 gap-5 sm:grid-cols-6">
              <div>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  GENERAL
                </h2>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Home</b></Link></li>
                  <li><Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>About</b></Link></li>
                  <li><Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Blogs</b></Link></li>
                  <li><Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Projects</b></Link></li>
                  {/* <li><Link href="/snippets" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Snippets</Link></li> */}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  PUBLIC
                </h2>
                <ul className="space-y-2">
                  <li><Link href="https://bento.me/xfei" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Bento</b></Link></li>
                  <li><Link href="https://www.strava.com/athletes/94054931" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Strava</b></Link></li>
                  {/* <li><Link href="/hire-me" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Hire me</Link></li> */}
                  <li><Link href="https://read.cv/xuf" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Read CV</b></Link></li>
                  <li><Link href="/newsletter" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Newsletter</b></Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  EXTRA
                </h2>
                <ul className="space-y-2">
                  <li><Link href="/uses" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Uses</b></Link></li>
                  <li><Link href="/blog/Snippt" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Snippt</b></Link></li>
                  {/* <li><Link href="/hire-me" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Hire me</Link></li> */}
                  <li><Link href="https://read.cv/xuf" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Books</b></Link></li>
                  <li><Link href="/newsletter" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"><b>Movies</b></Link></li>
                </ul>
              </div>

              {/* Newsletter 组件占用两列 */}
              <div className="col-span-3 sm:col-span-3 md:col-span-3">
                <Newsletter subCount={`${subs?.subCount ?? '0'}`} />
              </div>
            </div>

            {/* 底部版权信息和链接 */}
            {/* <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
                &copy; {new Date().getFullYear()} xufei & 许飛. 网站基于 Cali Castle：
                <PeekabooLink href="https://github.com/CaliCastle/cali.so">
                  GitHub
                </PeekabooLink> 
              </p> 
              <Links />
            </div> */}
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
