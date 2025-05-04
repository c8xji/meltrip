import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const goToTrips = () => {
    navigate('/trips')
  }

  const goToInfo = () => {
    navigate('/Info')
  }

  return (
    <>
  {/* ✅ 手機版 Hero */}
  <div
    className="h-screen w-full bg-cover bg-center relative block sm:hidden"
    style={{ backgroundImage: "url('/station-home.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/20" />
    <div className="relative z-10 h-full px-6 text-center">
  {/* ✅ 標題：置中 & 寬度限制 */}
  <h1 className="absolute top-2/5 left-1/2 -translate-x-1/2 text-6xl font-bold text-white drop-shadow-xl max-w-xs sm:max-w-md w-full">
    探索墨爾本
  </h1>

  {/* ✅ 按鈕：置底、排版穩定、可換行 */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 w-full px-4 max-w-sm">
    <button
      className="px-6 py-3 bg-white/90 text-black text-base font-semibold rounded-lg hover:bg-black hover:text-white transition w-full sm:w-auto"
      onClick={goToInfo}
    >
      旅遊資訊
    </button>
    <button
      className="px-6 py-3 bg-yellow-400 text-black text-base font-semibold rounded-lg hover:bg-emerald-950 hover:text-white transition w-full sm:w-auto"
      onClick={goToTrips}
    >
      探索所有行程
    </button>
  </div>
</div>

  </div>

  {/* ✅ 桌機版 Hero */}
  <div
    className="hidden sm:flex h-screen w-full bg-cover bg-center items-start"
    style={{ backgroundImage: "url('/station-home.jpg')" }}
  >
    <div className="ml-20 mt-36">
      <h1 className="text-8xl font-bold mb-8 text-black">探索墨爾本</h1>
      <div className="space-x-4">
        <button
          className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition"
          onClick={goToInfo}
        >
          旅遊資訊
        </button>
        <button
          className="px-8 py-4 bg-yellow-400 text-black text-lg font-semibold rounded-lg hover:bg-emerald-950 hover:text-white transition"
          onClick={goToTrips}
        >
          探索所有行程
        </button>
      </div>
    </div>
  </div>
</>  
  )
}

export default Home
