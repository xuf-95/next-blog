'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export function Photos({ photos }: { photos: string[] }) {
  const [width, setWidth] = React.useState(0)
  const [isCompact, setIsCompact] = React.useState(false)
  const expandedWidth = React.useMemo(() => width * 1.38, [width])
  const [isHovering, setIsHovering] = React.useState(false)

  // 保留原有响应式布局逻辑
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsCompact(true)
        return setWidth(window.innerWidth / 2 - 64)
      }
      setWidth(window.innerWidth / photos.length - 4 * photos.length)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [photos.length])

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
              duration: photos.length * 10, // 数值越大滚动越慢
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          style={{ 
            animationPlayState: isHovering ? 'paused' : 'running',
            width: `${photos.length * 100}%` 
          }}
        >
          {[...photos, ...photos, ...photos, ...photos].map((image, idx) => (
            <motion.div
              key={`${image}-${idx}`}
              className="inline-block px-4"
              style={{ width: `${width}px` }}
              animate={{
                rotate: idx % 2 === 0 ? 2 : -1 // 保留原有旋转逻辑
              }}
              whileHover={{
                scale: 1.05,
                rotate: 0, // 悬停时回正
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
              <div className="relative h-40 overflow-hidden rounded-xl bg-zinc-100 ring-2 ring-lime-800/20 dark:bg-zinc-800 dark:ring-lime-300/10 md:h-72 md:rounded-3xl">
                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
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