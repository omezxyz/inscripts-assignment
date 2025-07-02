import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { data } from "../data/rows";
import { columns } from "../data/columns";
import { PiArrowsSplit } from "react-icons/pi";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { FiPlus } from "react-icons/fi";
import { SlRefresh } from "react-icons/sl";
import { IoMdLink } from "react-icons/io";

export function Spreadsheet() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const emptyRows = Array(20).fill(null);

  // Header styles map
  const headerStyles: Record<string, string> = {
    jobRequest: "bg-gray-200",
    submitted: "bg-gray-200",
    status: "bg-gray-200",
    submitter: "bg-gray-200",
    url: "bg-gray-200",
    assigned: "bg-[#e6efe4] text-green-900",
    priority: "bg-purple-100 text-purple-800",
    due: "bg-purple-100 text-purple-800",
    value: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 text-sm">
        <thead className="sticky top-0 bg-white z-10">
          {/* Group Header Row */}
          <tr className="bg-white sticky top-0 z-20">
            <th className="w-8 border border-gray-300"></th>{" "}
            {/* Serial # blank */}
            {/* Q3 Financial Overview spans 4 columns */}
            <th colSpan={4} className="bg-gray-200 text-left p-2">
              <div className="flex items-center space-x-2">
                <span
                  className="border rounded bg-gray-100 font-light flex items-center justify-center text-gray-500 px-2 py-1 cursor-pointer"
                  onClick={() => console.log("Q3 Financial Overview clicked")}
                >
                  <IoMdLink className="text-blue-500 mr-2 h-4 w-4" /> Q3
                  Financial Overview
                </span>
                <span
                  className="text-orange-500 p-1 cursor-pointer"
                  onClick={() => console.log("Refresh clicked")}
                >
                  <SlRefresh />
                </span>
              </div>
            </th>
            <th colSpan={1}></th>
            {/* ABC */}
            <th className="border border-gray-300 bg-[#c9d3c6] text-green-900 font-light text-center">
              <div className="flex items-center justify-center space-x-1">
                <PiArrowsSplit
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => console.log("ABC icon clicked")}
                />
                <span className="p-1">ABC</span>
                <EllipsisHorizontalIcon
                  className="w-4 h-4 text-gray-500 cursor-pointer"
                  onClick={() => console.log("ABC more options clicked")}
                />
              </div>
            </th>
            {/* Answer a question */}
            <th
              colSpan={2}
              className="border border-gray-300 bg-purple-200 text-purple-800 text-center"
            >
              <div className="flex items-center justify-center space-x-1">
                <PiArrowsSplit
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => console.log("Answer icon clicked")}
                />
                <span className="p-1">Answer a question</span>
                <EllipsisHorizontalIcon
                  className="w-4 h-4 text-gray-500 cursor-pointer"
                  onClick={() => console.log("Answer more options clicked")}
                />
              </div>
            </th>
            {/* Extract */}
            <th className="border border-gray-300 bg-orange-200 text-orange-800 text-center">
              <div className="flex items-center justify-center space-x-1">
                <PiArrowsSplit
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => console.log("Extract icon clicked")}
                />
                <span className="p-1">Extract</span>
                <EllipsisHorizontalIcon
                  className="w-4 h-4 text-gray-500 cursor-pointer"
                  onClick={() => console.log("Extract more options clicked")}
                />
              </div>
            </th>
            {/* Plus Column */}
            <th
              className="border border-gray-300 bg-gray-200 cursor-pointer"
              onClick={() => console.log("Plus column clicked")}
            >
              <span className="flex items-center justify-center">
                <FiPlus className="h-5 w-5" />
              </span>
            </th>
          </tr>

          {/* Column Header Row */}
          <tr className="bg-gray-50 sticky top-[40px] z-10">
            <th className="w-8 border border-gray-300 text-center text-gray-400 bg-gray-200">
              #
            </th>
            {table.getHeaderGroups()[0].headers.map((header) => {
              const columnId = header.column.id;
              const extraClass = headerStyles[columnId] || "";

              return (
                <th
                  key={header.id}
                  className={`p-2 border text-gray-500 text-[13px] border-gray-300 text-left truncate 
                  ${extraClass}`}
                  style={{
                    width: columnId === "jobRequest" ? "300px" : "200px",
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              );
            })}
            <th
              className="border border-gray-300 bg-gray-200 cursor-pointer"
              style={{ width: "200px" }}
            ></th>{" "}
            {/* + column empty */}
          </tr>
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              onClick={() => console.log(`Row clicked: ${index + 1}`)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border border-gray-300 text-center text-gray-500">
                {index + 1}
              </td>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`p-2 border border-gray-300 truncate ${
                    ["submitted", "due", "value"].includes(cell.column.id)
                      ? "text-right"
                      : ["jobRequest", "submitter", "url", "assigned"].includes(
                          cell.column.id
                        )
                      ? "text-left"
                      : "text-center"
                  }`}
                  style={{
                    width: cell.column.id === "jobRequest" ? "300px" : "200px",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent row click on cell click
                    console.log(
                      `Cell clicked: Row ${index + 1}, Column "${cell.column.id}"`
                    );
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="border border-gray-300"></td>
            </tr>
          ))}

          {emptyRows.map((_, idx) => (
            <tr key={`empty-${idx}`}>
              <td className="border border-gray-300 text-center text-gray-300">
                {table.getRowModel().rows.length + idx + 1}
              </td>
              {columns.map((_col, cidx) => (
                <td key={cidx} className="p-2 border border-gray-300 h-8"></td>
              ))}
              <td className="border border-gray-300"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
