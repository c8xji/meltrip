import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousel = ({ gallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % gallery.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* 圖片展示框：固定比例，overflow hidden */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={gallery[currentIndex].image}
            src={gallery[currentIndex].image}
            alt={gallery[currentIndex].caption}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* 控制箭頭 */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* caption + indicator */}
      <div className="mt-4 w-full text-center space-y-3">
        <p className="text-gray-200 text-base">{gallery[currentIndex]?.caption}</p>
        <div className="flex justify-center gap-2">
          {gallery.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
