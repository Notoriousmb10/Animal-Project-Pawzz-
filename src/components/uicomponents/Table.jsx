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
  
const appointments = [
    {
        petName: "Buddy",
        clinicName: "Happy Pets Clinic",
        date: "2023-01-15",
        approval: "Approved",
    },
    {
        petName: "Mittens",
        clinicName: "Healthy Paws Clinic",
        date: "2023-02-20",
        approval: "Pending",
    },
    {
        petName: "Rex",
        clinicName: "VetCare Clinic",
        date: "2023-03-10",
        approval: "Rejected",
    },
    {
        petName: "Whiskers",
        clinicName: "Pet Wellness Center",
        date: "2023-04-05",
        approval: "Approved",
    },
    {
        petName: "Bella",
        clinicName: "Animal Health Clinic",
        date: "2023-05-18",
        approval: "Approved",
    },
    {
        petName: "Max",
        clinicName: "Pet Health Clinic",
        date: "2023-06-22",
        approval: "Pending",
    },
    {
        petName: "Luna",
        clinicName: "Happy Tails Clinic",
        date: "2023-07-30",
        approval: "Rejected",
    },
]
  
export default function DataTable() {
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
          {appointments.map((appointment, index) => (
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