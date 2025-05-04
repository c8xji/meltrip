import { useParams, useNavigate } from 'react-router-dom'
import itineraries from '../data/itineraries'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const TripDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentIndex = itineraries.findIndex((item) => item.id === id)
  const trip = itineraries[currentIndex]

  if (!trip) return <div className="text-center text-2xl py-20">找不到行程喔！</div>

  const formattedDate = trip.dateParts?.join('')
  const prevTrip = itineraries[currentIndex - 1]
  const nextTrip = itineraries[currentIndex + 1]

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-[#111827] px-4 text-white">
        <div className="max-w-screen-xl mx-auto bg-[#1f2937] rounded-2xl shadow-md p-6 sm:p-8 md:p-12 flex flex-col md:flex-row gap-10 min-h-[75vh]">
          {/* 左側資訊區塊 */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-yellow-400">{trip.title}</h1>
            <p className="text-lg sm:text-xl text-gray-300">{trip.summary}</p>
            <p className="text-lg sm:text-2xl text-yellow-300 font-semibold">{formattedDate}</p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-200">{trip.description}</p>

            {trip.detail && (
              <ul className="space-y-2 pt-4 text-sm sm:text-base">
                {trip.detail.map((item, index) => (
                  <li key={index} className="text-gray-300">
                    {item.time && <span className="font-medium text-yellow-400 mr-2">{item.time}</span>}
                    {item.location}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 右側 Carousel 區塊 */}
          <div className="md:w-1/2 flex items-center">
            <div className="w-full bg-black rounded-2xl shadow p-4">
              <Carousel gallery={trip.gallery} />
            </div>
          </div>
        </div>

        {/* 上/下一天按鈕區塊 */}
        <div className="max-w-screen-xl mx-auto mt-12 flex flex-col sm:flex-row gap-4 sm:justify-between items-stretch sm:items-center">
          {prevTrip ? (
            <button
              onClick={() => navigate(`/trip/${prevTrip.id}`)}
              className="w-full sm:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition"
            >
              ← 上一天：{prevTrip.title}
            </button>
          ) : <div />}

          {nextTrip ? (
            <button
              onClick={() => navigate(`/trip/${nextTrip.id}`)}
              className="w-full sm:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-semibold transition"
            >
              下一天：{nextTrip.title} →
            </button>
          ) : <div />}
        </div>
      </main>
    </>
  )
}

export default TripDetail
