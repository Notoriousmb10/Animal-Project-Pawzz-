
import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { UiButton } from '../Button';
  
const HomeDrawer = ({label, className, selectedOption}) => {

    


    if (selectedOption === 'Report Injured Animal') {
        return (
            <div>
                <p>Report Injured Animal selected</p>
            </div>
        );
    }
  return (
    <Drawer>
      <DrawerTrigger className={className}>{label}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <UiButton label={"Delete"} className={"rounded-full bg-red-500"} />
          <DrawerClose>
            <UiButton label={"Cancel"} className={"rounded-full bg-blue-500"} />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default HomeDrawer;