import { Status } from "@prisma/client";

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusColor =
    status === Status.TODO
      ? "bg-red-400 text-red-950"
      : status === Status.IN_PROGRESS
      ? "bg-yellow-400 text-yellow-950"
      : "bg-green-400 text-green-950";
  return <div className={`${statusColor} py-2 px-6 rounded-lg w-min font-semibold`}>{status.toString()}</div>;
};

export default StatusBadge;
