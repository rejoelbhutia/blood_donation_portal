import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar
} from "lucide-react";

export default function DonorContactCard({
  name,
  initials,
  bloodGroup,
  status, // "Responded" | "Pending" | "Confirmed"
  location,
  contactedDate,
  message,
  phone
}) {
  const statusStyles = {
    Responded: "bg-blue-100 text-blue-700",
    Pending: "bg-gray-100 text-gray-700",
    Confirmed: "bg-green-100 text-green-700",
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 font-semibold flex items-center justify-center">
            {initials}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{name}</h3>

              <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-600 font-medium">
                {bloodGroup}
              </span>

              <span
                className={`px-2 py-0.5 text-xs rounded-full font-medium ${statusStyles[status]}`}
              >
                {status}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {location}
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <Calendar size={14} />
              Contacted on {contactedDate}
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-gray-700">
          {message}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        {phone && (
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition"
          >
            <Phone size={16} />
            {phone}
          </a>
        )}

        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition">
          <MessageCircle size={16} />
          Send Message
        </button>
      </div>
    </div>
  );
}
