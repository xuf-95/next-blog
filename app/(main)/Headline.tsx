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

// function OCD() {
//   return (
//     <span className="group inline-flex items-center">
//       <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
//       <span>细节控</span>
//     </span>
//   )
// }

// function Founder() {
//   return (
//     <span className="group inline-flex items-center">
//       <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
//       <span>创始人</span>
//     </span>
//   )
// }

// export function Headline() {
//   return (
//     <div className="max-w-2xl">
//       <motion.h1
//         className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           type: 'spring',
//           damping: 25,
//           stiffness: 100,
//           duration: 0.3,
//         }}
//       >
//         {/* <Developer />，<Designer />， */}
//         {/* <span className="block h-2" /> */}
//         {/* <OCD />，<Founder /> */}
//       </motion.h1>
//       <motion.p
//         className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           type: 'spring',
//           damping: 30,
//           stiffness: 85,
//           duration: 0.3,
//           delay: 0.1,
//         }}
//       >
//         <Balancer>
//           Hey There, I'm XuFei 🙌
//           数据工程师，目前我正在做数字游民，旅居大理，正在学习和寻找远程工作的机会。
//           我热爱开发，设计，创新，享受生活，以及在未知领域中探索。
//         </Balancer>
//       </motion.p>
//       <motion.div
//         className="mt-6 flex gap-6"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           type: 'spring',
//           damping: 50,
//           stiffness: 90,
//           duration: 0.35,
//           delay: 0.25,
//         }}
//       >
//         <SocialLink
//           href="https://x.com/pfx95"
//           aria-label="我的推特"
//           platform="twitter"
//         />
//         <SocialLink
//           href="https://cali.so/youtube"
//           aria-label="我的 YouTube"
//           platform="youtube"
//         />
//         <SocialLink
//           href="https://cali.so/bilibili"
//           aria-label="我的 Bilibili"
//           platform="bilibili"
//         />
//         <SocialLink
//           href="https://github.com/xuf-95"
//           aria-label="我的 GitHub"
//           platform="github"
//         />
//         <SocialLink
//           href="https://cali.so/tg"
//           aria-label="我的 Telegram"
//           platform="telegram"
//         />
//         <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
//         <SocialLink
//           href="sherlock.xpf@gmail.com"
//           aria-label="我的邮箱"
//           platform="mail"
//         />
//       </motion.div>
//     </div>
//   )
// }


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
            XuFei 许飛
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
          数据工程师，开发者，数字游民，常居大理。目前处于个人职业探索（一人公司）阶段，寻求合作
        </motion.p>
        
        <motion.p 
          className="text-gray-400 mt-2 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          我热爱旅行，骑行，享受生活，Building In Public。
          <Designer />
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
          platform="twitter"
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
          href="https://cali.so/tg"
          aria-label="Telegram"
          platform="telegram"
        />
        {/* <SocialLink
          href="https://www.instagram.com/xufei_sherlock/"
          aria-label="Instagram"
          platform="instagram"
        /> */}
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
