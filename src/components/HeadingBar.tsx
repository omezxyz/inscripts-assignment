import {
  BellIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { BiSolidDockRight } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

export function HeadingBar() {
  const handleClick = (label: string) => {
    console.log(`${label} clicked`);
  };

  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-300 bg-gray-50 text-sm">
      
      {/* Left: Breadcrumb Path */}
      <div className="flex items-center space-x-2">
        
        <BiSolidDockRight className="w-6 h-6 text-green-800 m-2 cursor-pointer" onClick={() => handleClick("Workspace Icon")} />
        
        <span className="font-medium text-gray-400 cursor-pointer" onClick={() => handleClick("Workspace text")}>
          Workspace
        </span>

        <MdKeyboardArrowRight className="text-gray-400 w-5 h-5" />

        <span className="text-gray-400 cursor-pointer" onClick={() => handleClick("Folder 2 text")}>
          Folder 2
        </span>

        <MdKeyboardArrowRight className="text-gray-400 w-5 h-5" />

        <span className="font-medium cursor-pointer" onClick={() => handleClick("Spreadsheet 3 text")}>
          Spreadsheet 3
        </span>

        <EllipsisHorizontalIcon
          className="w-5 h-5 text-gray-500 cursor-pointer"
          onClick={() => handleClick("More options")}
        />
      </div>

      {/* Right: Search, Notifications, Profile */}
      <div className="flex items-center space-x-3">
        
        {/* Search */}
        <div className="relative">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 absolute left-2 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 py-2 border rounded bg-gray-200 text-sm placeholder-gray-500 font-sans"
            onClick={() => handleClick("Search input clicked")}
            onChange={(e) => console.log(`Search typing: ${e.target.value}`)}
          />
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer" onClick={() => handleClick("Notifications")}>
          <BellIcon className="w-6 h-6 text-gray-900" />
          <span className="absolute -top-1 -right-1 bg-green-800 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center px-4 cursor-pointer" onClick={() => handleClick("Profile section")}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            onClick={(e) => {
              e.stopPropagation();
              handleClick("Profile Image");
            }}
          />
          <div className="flex flex-col leading-tight px-2">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-gray-400">john.doe...</span>
          </div>
        </div>

      </div>
    </div>
  );
}
