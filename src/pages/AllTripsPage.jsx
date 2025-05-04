import TripCard from '../components/TripCard'
import TripCardMobile from '../components/TripCardMobile'
import itineraries from '../data/itineraries'
import Layout from '../components/Layout'

const AllTripsPage = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto py-6 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12">
          所有行程
        </h1>

        {/* 桌機版：六欄排版 */}
<div className="hidden sm:grid grid-cols-6 gap-6 justify-items-center">
  {itineraries.map((trip) => (
    <TripCard
      key={trip.id}
      id={trip.id}
      image={trip.coverImage}
      dateParts={trip.dateParts}
    />
  ))}
</div>

{/* 手機版：橫向卡片列表 */}
<div className="flex flex-col space-y-4 sm:hidden">
  {itineraries.map((trip) => (
    <TripCardMobile
      key={trip.id}
      id={trip.id}
      image={trip.coverImage}
      dateParts={trip.dateParts}
      title={trip.title}
    />
  ))}
</div>
      </div>
    </Layout>
  )
}

export default AllTripsPage
