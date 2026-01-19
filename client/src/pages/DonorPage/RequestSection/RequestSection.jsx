import Request from "./Requests"
import Instruciton from "../../../component/Instruction"

export default function RequestSection() {
  return (
    <>
    <Instruciton title={"These requests match your blood type (O+)"} description={"O+ blood can be donated to O+, A+, B+, and AB+ recipients. You can help save lives"}/>
    <Request />
    
    </>
  )
}
