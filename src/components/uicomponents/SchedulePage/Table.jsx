import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";
import { useScheduleCountStore } from "@/app/Store/useStore";
export default function DataTable({ data }) {
  const { setScheduleCount } = useScheduleCountStore();
  useEffect(() => {
    setScheduleCount(data.length);
  }, [data]);
  return (
    <Table className="bg-[#f0f8ff]">
      <TableCaption>A list of your recent appointments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Pet Name</TableHead>
          <TableHead>Clinic Name</TableHead>
          <TableHead>Reason</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Approval</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((appointment, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{appointment.petName}</TableCell>
            <TableCell>{appointment.clinicName.slice(0, 16)}</TableCell>
            <TableCell>{appointment.reason}</TableCell>
            <TableCell>{appointment.date}</TableCell>
            <TableCell className="text-yellow-500 w-[100px]">
              {appointment.approval}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
