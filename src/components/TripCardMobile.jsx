import { Link } from 'react-router-dom'

const TripCardMobile = ({ id, image, dateParts, title }) => {
  return (
    <Link to={`/trip/${id}`} className="block">
      <div className="flex bg-white shadow-md rounded-xl overflow-hidden">
        <div
          className="w-28 h-28 flex-shrink-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-4 flex flex-col justify-center">
          <div className="text-xs text-gray-500 mb-1">{dateParts.join(' ')}</div>
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default TripCardMobile
