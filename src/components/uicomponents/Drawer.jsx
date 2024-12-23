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
import { useEffect } from "react";

const AppDrawer = ({ isOpen, onClose, children, displayData }) => {
  const [animalDetails, setAnimalDetails] = React.useState({});
  useEffect(() => {
    setAnimalDetails(JSON.stringify(displayData, null, 2));
  }, [displayData]);
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>The Details You Have Filled</DrawerTitle>
          <DrawerDescription>
            {JSON.stringify(displayData, null, 2)}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row justify-end">
          <Button className="w-[100px]">OK</Button>
          <DrawerClose>
            <Button variant="outline" onClick={onClose} className="w-[100px]">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
