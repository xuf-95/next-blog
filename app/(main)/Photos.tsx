'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export function Photos({ photos }: { photos: string[] }) {
  const [containerWidth, setContainerWidth] = React.useState(0)
  const [isCompact, setIsCompact] = React.useState(false)
  const [isHovering, setIsHovering] = React.useState(false)

  // 优化尺寸计算
  const photoSize = React.useMemo(() => {
    const aspectRatio = 4 / 3.5 // 改为更紧凑的3:2比例
    const baseWidth = isCompact ? 
      Math.min(containerWidth * 0.6, 300) : // 移动端最大300px
      320 // 桌面端基准宽度减少25%
      
    return {
      width: baseWidth,
      height: baseWidth / aspectRatio,
      margin: isCompact ? 6 : 12 // 缩小间距
    }
  }, [containerWidth, isCompact])

  // 响应式布局逻辑
  React.useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth
      setIsCompact(viewportWidth < 640)
      setContainerWidth(viewportWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // return (
  //   <motion.div
  //     className="mt-16 sm:mt-12"
  //     initial={{ opacity: 0, scale: 0.925, y: 16 }}
  //     animate={{ opacity: 1, scale: 1, y: 0 }}
  //     transition={{ delay: 0.5, type: 'spring' }}
  //   >
  //     <div 
  //       className="relative flex overflow-x-hidden overflow-y-visible w-auto"
  //       onMouseEnter={() => setIsHovering(true)}
  //       onMouseLeave={() => setIsHovering(false)}
  //     >
  //       <motion.div
  //         className="w-full py-4 flex whitespace-nowrap"
  //         animate={{ 
  //           x: ['0%', '-50%'], // 改为移动50%
  //           transition: {
  //             duration: photos.length * 15,
  //             repeat: Infinity,
  //             ease: 'linear'
  //           }
  //         }}
  //         style={{ 
  //           animationPlayState: isHovering ? 'paused' : 'running',
  //           // 计算两倍照片数组的总宽度
  //           width: `${2 * photos.length * (photoSize.width + photoSize.margin * 2)}px`
  //         }}
  //       >
  //         {[...photos].map((image, idx) => (
  //           <motion.div
  //             key={`${image}-${idx}`}
  //             className="inline-block"
  //             style={{ 
  //               width: photoSize.width,
  //               height: photoSize.height,
  //               margin: `0 ${photoSize.margin}px`
  //             }}
  //             animate={{
  //               rotate: idx % 2 === 0 ? 2 : -1
  //             }}
  //             whileHover={{
  //               scale: 1.05,
  //               rotate: 0,
  //               transition: { 
  //                 duration: 0.3,
  //                 rotate: { type: 'spring', stiffness: 150 }
  //               }
  //             }}
  //             transition={{
  //               rotate: {
  //                 type: 'spring',
  //                 stiffness: 50,
  //                 damping: 10
  //               }
  //             }}
  //           >
  //             <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:rounded-3xl">
  //               <Image
  //                 src={image}
  //                 alt=""
  //                 fill
  //                 sizes="(max-width: 480px) 50vw, 360px"
  //                 className="object-cover"
  //                 style={{
  //                   filter: isHovering ? 'grayscale(0)' : 'grayscale(0.3)',
  //                   transition: 'filter 0.3s ease'
  //                 }}
  //               />
  //             </div>
  //           </motion.div>
  //         ))}
  //       </motion.div>
  //     </div>
  //   </motion.div>
  // )

  return (
    <motion.div
      className="mt-16 sm:mt-12"
      initial={{ opacity: 0, scale: 0.925, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, type: 'spring' }}
    >
      <div 
        className="relative flex overflow-x-hidden overflow-y-visible w-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="w-full py-4 flex whitespace-nowrap"
          animate={{ 
            x: ['0%', '-50%'],
            transition: {
              duration: photos.length * 18, // 稍慢速滚动
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          style={{ 
            animationPlayState: isHovering ? 'paused' : 'running',
            width: `${2 * photos.length * (photoSize.width + photoSize.margin * 2)}px`
          }}
        >
          {[...photos, ...photos].map((image, idx) => (
              <motion.div
                key={`${image}-${idx}`}
                className="inline-block"
                style={{ 
                  width: photoSize.width,
                  height: photoSize.height,
                  margin: `0 ${photoSize.margin}px`
                }}
                animate={{
                  rotate: idx % 2 === 0 ? 2 : -1
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  transition: { 
                    duration: 0.3,
                    rotate: { type: 'spring', stiffness: 150 }
                  }
                }}
                transition={{
                  rotate: {
                    type: 'spring',
                    stiffness: 50,
                    damping: 10
                  }
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:rounded-3xl">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 480px) 50vw, 360px"
                    className="object-cover"
                    style={{
                      filter: isHovering ? 'grayscale(0)' : 'grayscale(0.3)',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    )
}

