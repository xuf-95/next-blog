'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export function Photos({ photos }: { photos: string[] }) {
  const [containerWidth, setContainerWidth] = React.useState(0)
  const [isCompact, setIsCompact] = React.useState(false)
  const [isHovering, setIsHovering] = React.useState(false)

  // 计算单个照片的尺寸（4:3比例）
  const photoSize = React.useMemo(() => {
    const aspectRatio = 4 / 2
    const baseWidth = isCompact ? containerWidth * 0.8 : 420 // 大屏固定400px宽
    return {
      width: baseWidth,
      height: baseWidth / aspectRatio,
      margin: isCompact ? 8 : 16 // 间距响应式
    }
  }, [containerWidth, isCompact])

  // 响应式布局逻辑（优化版）
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

  return (
    <motion.div
      className="mt-16 sm:mt-20"
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
            x: ['0%', '-100%'],
            transition: {
              duration: photos.length * 15,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          style={{ 
            animationPlayState: isHovering ? 'paused' : 'running',
            width: `${photos.length * (photoSize.width + photoSize.margin * 2)}px` 
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
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:rounded-3xl"> {/**aspect-[4/3] */}
                <Image
                  src={image}
                  alt=""
                  fill // 使用Next.js的fill布局
                  sizes="(max-width: 640px) 50vw, 480px"
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