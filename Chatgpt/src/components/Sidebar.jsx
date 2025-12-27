import { SiOpenai } from "react-icons/si"
import { BsLayoutSidebar } from "react-icons/bs"
import {
  RiEditBoxLine,
  RiSearchLine,
  RiImageLine,
  RiApps2Line,
  RiGroupLine,
  RiBox3Line
} from "react-icons/ri"

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-72 bg-[#181818] border-r border-white/10 text-white ">

      {/* Header */}
      <div className="h-16 px-4 flex items-center rounded-lg text-lg">
        <SiOpenai size={24} />
        <BsLayoutSidebar size={20} className="ml-auto cursor-pointer" />
      </div>

      {/* Menu */}
      <ul className="flex-1 overflow-y-auto px-4 overflow-x-hidden break-words space-y-4">

        <div className="flex items-center gap-3">
          <RiEditBoxLine size={22} />
          <li className="text-sm">New chat</li>
        </div>

        <div className="flex items-center gap-3">
          <RiSearchLine size={22} />
          <li className="text-sm">Search chat</li>
        </div>

        <div className="flex items-center gap-3">
          <RiImageLine size={22} />
          <li className="text-sm">Images</li>
        </div>

        <div className="flex items-center gap-3">
          <RiApps2Line size={22} />
          <li className="text-sm">Apps</li>
        </div>

        <div className="flex items-center gap-3">
          <RiGroupLine size={22} />
          <li className="text-sm">GPTs</li>
        </div>

        <div className="flex items-center gap-3">
          <RiBox3Line size={22} />
          <li className="text-sm">Projects</li>
        </div>

      </ul>
      
    </div>
  )
}
