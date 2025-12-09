

export default function StatCard({value, label}) {
  return (
   
  <div>
    <p className="text-3xl sm:text-4xl font-bold text-red-600">{value}</p>
    <p className="text-sm text-gray-500 uppercase tracking-wide">{label}</p>
  </div>
  )
}
