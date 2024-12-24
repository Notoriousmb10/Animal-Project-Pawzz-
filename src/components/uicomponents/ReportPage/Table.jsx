import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";

export default function ReportDetailsTable({ data }) {

  
  useEffect(() => {
    console.log(data);
  }, [data]);



  const renderDetails = (details) => {
    if (typeof details === "object" && details !== null) {
      return (
        <ul className="list-disc pl-4">
          {Object.entries(details).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {renderDetails(value)}
            </li>
          ))}
        </ul>
      );
    }
    return details;
  };

  return (
    <Table className="bg-[#f0f8ff]">
      <TableCaption>Verify The Details Closely</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead>Category</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item[0]}</TableCell>
            <TableCell>{renderDetails(item[1])}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
