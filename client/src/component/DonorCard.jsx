import {
  PhoneCall,
  MessageCircleIcon,
  Pin,
  Calendar,
  Droplet,
} from "lucide-react";

export default function DonorCard() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl border border-gray-200 shadow-md p-5">

      {/* Header */}
      <div className="flex items-start gap-4">

        {/* Avatar */}
        <div className="w-14 h-14 shrink-0 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center border-4 border-white shadow">
          JS
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">

          {/* Name + Availability */}
          <div className="flex flex-wrap justify-between items-center gap-2">
            <h3 className="font-semibold text-gray-900 truncate">
              John Smith
            </h3>

            <span className="text-green-600 text-xs font-semibold bg-green-50 px-3 py-1 rounded-full border border-green-200">
              Available
            </span>
          </div>

          {/* Blood + Compatible */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-red-50 border border-red-200 text-red-600 text-xs font-bold px-2 py-1 rounded">
              A+
            </span>

            <span className="bg-green-50 border border-green-200 text-green-600 text-xs font-semibold px-2 py-1 rounded">
              Compatible
            </span>
          </div>

          {/* Meta Info */}
          <div className="mt-3 space-y-2 text-gray-500 text-sm">

            <div className="flex items-center gap-2">
              <Pin className="w-4 h-4 shrink-0" />
              <span>Brooklyn, NY • 1.2 miles</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Last donation: August 2025</span>
            </div>

            <div className="flex items-center gap-2">
              <Droplet className="w-4 h-4 shrink-0" />
              <span>15 total donations</span>
            </div>

          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 mt-5">

        <button className="flex items-center justify-center gap-2 w-full border border-red-600 text-red-600 font-semibold py-2 rounded-lg hover:bg-red-50 transition">
          <PhoneCall className="w-4 h-4" />
          Call
        </button>

        <button className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition">
          <MessageCircleIcon className="w-4 h-4" />
          Contact
        </button>

      </div>
    </div>
  );
}
