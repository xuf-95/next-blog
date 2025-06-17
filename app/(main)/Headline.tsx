'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
// import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

import { Avatar } from '~/components/Avatar'

function Designer() {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      Building in Public
    </span>
  )
}


export function Headline() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        {/* 标题部分 */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span className="inline-block">Hey there, I&apos;m </motion.span>
          {/* <span className="block h-2" /> */}
          <motion.span 
            className="inline-block ml-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            XuFei & 许飛
          </motion.span>
          <motion.span 
            className="inline-block"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            
          </motion.span>
        </motion.h1>

        {/* 描述部分 */}
        <motion.p 
          className="text-gray-400 mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <b>Data architect, digital nomad explorer.Currently I am working on a data cloud delivery related project in Shanghai</b>
        </motion.p>
        
        <motion.p 
          className="text-gray-400 mt-2 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <b> In my free time, I enjoy staying active, photography, programming, or a great cup of coffee or tea. Welcome to my corner on the web!</b>
          {/* <Designer /> */}
          {/* <b>, DATA + AI</b> */}
        </motion.p>

        <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://x.com/pfx95"
          aria-label="twitter"
          platform="twitter"
        />
        <SocialLink
          href="https://github.com/xuf-95"
          aria-label="GitHub"
          platform="github"
        />
        <SocialLink
          href="https://t.me/xuf_95"
          aria-label="Telegram"
          platform="telegram"
        />
        <SocialLink
          href="https://www.instagram.com/xuf_95"
          aria-label="Instagram"
          platform="instagram"
        />
        <SocialLink
          href="https://xufei.biz/"
          aria-label="wiki"
          platform="externalLink"
        />
        <SocialLink 
          href="/feed.xml" 
          platform="rss" 
          aria-label="RSS 订阅" 
        />
        <SocialLink
          href="sherlock.xpf@gmail.com"
          aria-label="我的邮箱"
          platform="mail"
        />
        <SocialLink
          href="https://ko-fi.com/xuf"
          aria-label="Ko-fi"
          platform="ko-fi"
        />

      </motion.div>

      </div>
    </div>
  );
};

export default Headline;
