

export default function Button2({textContent, color, textColor, hoverColor, borderColor}) {
  return (
    <>
    <button className={`bg-${color}-500 h-14 w-43 rounded-xl border border-${borderColor}-500`}>{textContent}</button>
    </>
  )
}
