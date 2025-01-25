'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
// import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

// function Developer() {
//   return (
//     <span className="group">
//       <span className="font-mono">&lt;</span>开发者
//       <span className="font-mono">/&gt;</span>
//       <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
//     </span>
//   )
// }

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
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span className="inline-block">Hey there, I&apos;m </motion.span>
          <span className="block h-2" />
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
          <b>Data engineer,digital nomad explorer.Currently in the stage of personal career exploration, seeking cooperation</b>
        </motion.p>
        
        <motion.p 
          className="text-gray-400 mt-2 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <b>Enjoy cycling, coffee & coding,</b>
          <Designer />
          <b>, All in AI</b>
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
          aria-label="推特"
          platform="x"
        />
        {/* <SocialLink
          href="https://cali.so/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        /> */}
        {/* <SocialLink
          href="https://cali.so/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        /> */}
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
        {/* <SocialLink
          href="https://www.instagram.com/xufei_sherlock/"
          aria-label="Instagram"
          platform="instagram"
        /> */}
        <SocialLink
          href="https://www.instagram.com/xufei_sherlock/"
          aria-label="wiki"
          platform="ufo"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="sherlock.xpf@gmail.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
      </div>
    </div>
  );
};

export default Headline;
