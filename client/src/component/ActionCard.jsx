const ActionCard = ({
  Icon,
  iconBgClass,
  iconColorClass,
  title,
  subtitle,
  listItems,
  listMarkerClass,
  buttonText,
  buttonClass,
  buttonHref = "#",
  borderColor
}) => (
  <div className={`bg-white rounded-xl shadow-lg border  p-8 flex flex-col h-full  ${borderColor}`}>
    
    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgClass} mb-6`}>
      <Icon className={`w-8 h-8 ${iconColorClass}`} />
    </div>
    
    {/* Text Content */}
    <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{subtitle}</p>
    
    {/* List */}
    <ul className={`list-disc pl-6 space-y-2 mb-8 ${listMarkerClass}`}>
      {listItems.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
    
    
    <div className="mt-auto">
      <a
        href={buttonHref}
        className={`w-full text-center block px-6 py-3 rounded-lg font-semibold text-white shadow-md transition duration-300 ${buttonClass}`}
      >
        {buttonText}
      </a>
    </div>
  </div>
);

export default ActionCard;