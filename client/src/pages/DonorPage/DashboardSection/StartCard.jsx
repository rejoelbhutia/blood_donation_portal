import { TrendingUp } from "lucide-react";



const StatCard = ({ title, value, icon: Icon, iconBgClass, iconColorClass, trend }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between border border-gray-200">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-medium text-gray-600">{title}</h3>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgClass}`}>
        <Icon className={`w-5 h-5 ${iconColorClass}`} />
      </div>
    </div>
    <div className="flex items-baseline">
      <p className="text-4xl font-bold text-gray-900 mr-2">{value}</p>
      {trend && (
        <span className={`text-sm font-semibold flex items-center ${trend.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
          {trend.value} <TrendingUp className={`w-4 h-4 ml-1 ${trend.color === 'green' ? 'text-green-500' : 'text-red-500'} rotate-0`} />
        </span>
      )}
    </div>
  </div>
);

export default StatCard;