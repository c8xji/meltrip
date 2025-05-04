import { Link } from 'react-router-dom'


const TripCard = ({ id, image, dateParts }) => {
  return (
    <Link to={`/trip/${id}`}>
      <div
        className="relative w-48 h-[30rem] rounded-lg overflow-hidden
              shadow-lg hover:shadow-2xl
              bg-cover bg-center
              transition-transform duration-300 ease-in-out transform
              hover:scale-110 cursor-pointer hover:z-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-4 left-4 text-shadow-lg/40 py-1 rounded text-white text-4xl leading-tight font-bold flex flex-col items-center text-center drop-shadow-md">
          {dateParts.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default TripCard
