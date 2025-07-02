import { type ColumnDef } from "@tanstack/react-table";
import { type RowData } from "./rows";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // down arrow
import { IoBagRemove } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";

export const columns: ColumnDef<RowData>[] = [
  {
    header: () => (
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-1">
          <span>
            <IoBagRemove />
          </span>
          <span>Job Request</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    ),
    id: "jobRequest",
    accessorKey: "job",
    cell: (info) => info.getValue(),
  },
  {
    header: () => (
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-1">
          <span>
            <MdOutlineDateRange />
          </span>
          <span>Submitted</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    ),
    id: "submitted",
    accessorKey: "submitted",
    cell: (info) => info.getValue(),
  },
  {
    header: () => (
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-1">
          <span>
            <IoIosTime />
          </span>
          <span>Status</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    ),
    id: "status",
    accessorKey: "status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          className={
            status === "In-process"
              ? "bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded"
              : status === "Need to start"
              ? "bg-blue-100 text-blue-800 px-2 py-0.5 rounded"
              : status === "Blocked"
              ? "bg-red-100 text-red-800 px-2 py-0.5 rounded"
              : status === "Complete"
              ? "bg-green-100 text-green-800 px-2 py-0.5 rounded"
              : ""
          }
        >
          {status as string}
        </span>
      );
    },
  },
  {
    header: () => (
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-1">
          <span>
            <MdPerson />
          </span>
          <span>Submitter</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    ),
    id: "submitter",
    accessorKey: "submitter",
    cell: (info) => info.getValue(),
  },
  {
    header: () => (
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-1">
          <span>
            <TbWorld />
          </span>
          <span>URL</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    ),
    id: "url",
    accessorKey: "url",
    cell: (info) => (
      <a
        href={`https://${info.getValue()}`}
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {info.getValue() as string}
      </a>
    ),
  },
  {
    header: () => (
      <div className="flex justify-between items-center">
        <span className="flex items-center space-x-1">
          <span>
            <FaHandsHelping />
          </span>
          <span>Assigned</span>
        </span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500" />
      </div>
    ),
    id: "assigned",
    accessorKey: "assigned",
    cell: (info) => info.getValue(),
  },

  // Rest of the columns (no icons)
  {
    id: "priority",
    header: "Priority",
    accessorKey: "priority",
    cell: (info) => (
      <span
        className={
          info.getValue() === "High"
            ? "text-red-500"
            : info.getValue() === "Medium"
            ? "text-yellow-600"
            : "text-blue-500"
        }
      >
        {info.getValue() as string}
      </span>
    ),
  },
  { id: "due",header: "Due Date", accessorKey: "due", cell: (info) => info.getValue() },
  {
    id: "value",
    header: "Est. Value",
    accessorKey: "value",
    cell: (info) => info.getValue(),
  },
];
