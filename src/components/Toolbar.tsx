import {
  ArrowsUpDownIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineKeyboardDoubleArrowRight, MdFilterList } from "react-icons/md";
import { VscEyeClosed } from "react-icons/vsc";
import { TbViewportTall } from "react-icons/tb";
import { FaRegShareSquare } from "react-icons/fa";
import { PiArrowsSplit } from "react-icons/pi";

export function Toolbar() {
  return (
    <div className="flex justify-between items-center p-2 px-4 border-b border-gray-300 bg-white text-sm">
      {/* Left Side Buttons with Icons */}
      <div className="flex space-x-6">
        <button
          className="flex items-center space-x-1"
          onClick={() => console.log("Toolbar")}
        >
          <span>Tool bar</span>
          <MdOutlineKeyboardDoubleArrowRight className="w-5 h-5" />
        </button>
        
        <button
          className="flex items-center space-x-1 "
          onClick={() => console.log("Hide fields")}
        >
          <VscEyeClosed className="w-5 h-5" />
          <span>Hide fields</span>
        </button>
        <button
          className="flex items-center space-x-1 "
          onClick={() => console.log("Sort")}
        >
          <ArrowsUpDownIcon className="w-5 h-5" />
          <span>Sort</span>
        </button>
        <button
          className="flex items-center space-x-1 "
          onClick={() => console.log("Filter")}
        >
          <MdFilterList className="w-5 h-5" />
          <span>Filter</span>
        </button>
        <button
          className="flex items-center space-x-1 "
          onClick={() => console.log("Cell view")}
        >
          <TbViewportTall className="w-5 h-5" />
          <span>Cell view</span>
        </button>
      </div>

      {/* Right Side Buttons */}
      <div className="flex space-x-2">
        <button
          className="flex items-center space-x-1 px-4 py-1 border border-gray-300 rounded"
          onClick={() => console.log("Import")}
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          <span>Import</span>
        </button>
        <button
          className="flex items-center space-x-1 px-4 py-1 border border-gray-300 rounded"
          onClick={() => console.log("Export")}
        >
          <ArrowUpTrayIcon className="w-5 h-5" />
          <span>Export</span>
        </button>
        <button
          className="flex items-center space-x-1 px-4 py-1 border border-gray-300 rounded"
          onClick={() => console.log("Share")}
        >
          <FaRegShareSquare className="w-5 h-5" />
          <span>Share</span>
        </button>
        <button
          className="flex items-center space-x-1 px-8 py-2 border bg-green-900 text-white rounded font-sans"
          onClick={() => console.log("New Action")}
        >
          <PiArrowsSplit className="w-5 h-5" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
}
