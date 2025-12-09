


import { UserPlus, Search, HeartHandshake, Heart, UserCircle, FileText, MessageSquare, Users } from 'lucide-react';



const ProcessStep = ({ number, Icon, title, description, iconBgClass, iconColorClass }) => (
  <li className="flex items-start gap-4">
    {/* Icon */}
    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${iconBgClass}`}>
      <Icon className={`w-6 h-6 ${iconColorClass}`} />
    </div>
    
    {/* Text Content */}
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        {/* Number */}
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 text-gray-700 flex items-center justify-center font-bold text-sm">
          {number}
        </span>
        {/* Title */}
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>
      {/* Description */}
      <p className="text-gray-600 pl-8">{description}</p>
    </div>
  </li>
);


const ProcessColumn = ({ title, steps }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
    <h3 className="text-2xl font-bold text-gray-900 mb-8">{title}</h3>
    <ol className="space-y-6">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          number={index + 1}
          Icon={step.icon}
          title={step.title}
          description={step.description}
          iconBgClass={step.iconBgClass}
          iconColorClass={step.iconColorClass}
        />
      ))}
    </ol>
  </div>
);

export default function HowItWorksSection() {
  const donorSteps = [
    {
      icon: UserPlus,
      title: "Register as Donor",
      description: "Create your profile with blood type and contact information.",
      iconBgClass: "bg-pink-100",
      iconColorClass: "text-pink-600"
    },
    {
      icon: Search,
      title: "Browse Requests",
      description: "View blood requests that match your blood type and location.",
      iconBgClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600"
    },
    {
      icon: HeartHandshake,
      title: "Connect & Help",
      description: "Contact receivers directly and coordinate donation.",
      iconBgClass: "bg-green-100",
      iconColorClass: "text-green-600"
    },
    {
      icon: Heart,
      title: "Save a Life",
      description: "Complete your donation and make a real difference.",
      iconBgClass: "bg-blue-100",
      iconColorClass: "text-blue-600"
    },
  ];

  const receiverSteps = [
    {
      icon: UserCircle,
      title: "Create Account",
      description: "Sign up and verify your identity to post requests.",
      iconBgClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600"
    },
    {
      icon: FileText,
      title: "Post Request",
      description: "Share blood type needed, urgency, and location details.",
      iconBgClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600"
    },
    {
      icon: MessageSquare,
      title: "Get Responses",
      description: "Donors will contact you to arrange donation.",
      iconBgClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Receive Help",
      description: "Coordinate with donors and get the help you need.",
      iconBgClass: "bg-yellow-100",
      iconColorClass: "text-yellow-600"
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-inter">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Simple steps to connect donors with those in need
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProcessColumn title="For Donors" steps={donorSteps} />
          <ProcessColumn title="For Receivers" steps={receiverSteps} />
        </div>

      </div>
    </section>
  );
}
