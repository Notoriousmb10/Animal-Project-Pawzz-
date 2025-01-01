import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import ReportDetailsTable from "./ReportPage/Table";

const AppDrawer = ({ isOpen, onClose, displayData }) => {
  const [animalDetails, setAnimalDetails] = React.useState([]);
  useEffect(() => {
    console.log(displayData);
    const dataAsArray = Object.entries(displayData);
    setAnimalDetails(dataAsArray);
    console.log(dataAsArray);
  }, [displayData]);
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>The Details You Have Filled</DrawerTitle>
          <DrawerDescription>
            <ReportDetailsTable data={animalDetails} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row justify-end">
          <DrawerClose>
            <Button className="w-[100px] bg-blue-500 hover:bg-blue-700" onClick={onClose}>
              OK
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
