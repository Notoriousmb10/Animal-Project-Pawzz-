import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  
export default function DataTable({data}) {
    return (
      <Table>
        <TableCaption>A list of your recent appointments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Pet Name</TableHead>
            <TableHead>Clinic Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{appointment.petName}</TableCell>
              <TableCell>{appointment.clinicName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell className={appointment.approval === "Approved" ? "text-green-500" : appointment.approval === "Pending" ? "text-yellow-500" :appointment.approval === "Rejected" ? "text-red-500" : ""}>
                {appointment.approval}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}