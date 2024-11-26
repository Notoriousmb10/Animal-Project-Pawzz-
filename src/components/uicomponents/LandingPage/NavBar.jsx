import React from 'react';
import Image from 'next/image';
import {UiButton} from '../Button'; // Adjust the import path as necessary
import paw from '../../../../public/paw.png'; // Adjust the import path as necessary

const NavBar = () => {
    return (
        <div className="flex flex-row justify-between p-10">
            <div className="flex items-center gap-2">
                <Image src={paw} height={48} width={48} alt="" />
                <h1 className="text-2xl font-bold">Pawzz</h1>
            </div>
            <UiButton
                className={"bg-white text-black hover:bg-slate-50 shadow-md"}
                label={"Login"}
            />
        </div>
    );
};

export default NavBar;
