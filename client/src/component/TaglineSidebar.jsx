

export default function TaglineSidebar({tagline, description}) {
  return (
    <div className=" flex flex-col gap-6 items-center justify-center h-full w-full p-8">
        <h2 className=" text-4xl font-medium text-white">{tagline}</h2>
        <p className=" text-2xl text-white">{description}</p>
    </div>
  )
}
