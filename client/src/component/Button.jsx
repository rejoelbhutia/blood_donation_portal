

export default function Button({btnName, btnColor, textColor, onClick, btnType}) {
  return (
    <button className={` w-[150px] h-[48px] lg:w-[250px] lg:h-[80px] xl-w-[300px] text-2xl bg-red-600 ${textColor} hover:translate-1 hover:cursor-pointer`} onClick={onClick} type={btnType}>{btnName}</button>
  )
}
 