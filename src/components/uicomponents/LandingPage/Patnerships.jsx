import Image from 'next/image';
import paw from '../../../../public/paw.png';
import Ngo1 from '../../../../public/Ngo1.jpeg';
import Ngo2 from '../../../../public/Ngo2.png';
import Ngo3 from '../../../../public/Ngo3.jpeg';
import Ngo4 from '../../../../public/Ngo4.png';
import Ngo6 from '../../../../public/Ngo6.jpeg';
import Ngo7 from '../../../../public/Ngo7.png';

const Partnerships = () => {
    return (
        <div className="mt-40 bg-blue-50 pt-20">
            <div className="flex justify-center flex-col items-center px-36">
                <div className="pb-20">
                    <div className="flex items-center justify-center">
                        <h1 className="font-bold text-5xl text-center">
                            "Our Trusted Pawtners"
                        </h1>
                        <Image src={paw} height={42} width={42} className="ml-2" alt="" />
                    </div>
                    <p className="font-medium pt-6">
                        We collaborate with leading{" "}
                        <span className="bg-blue-200 text-black p-2 rounded-md ">
                            NGOs
                        </span>
                        shelters, and veterinarians to provide the best care for animals.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-12 py-10">
                    <Image src={Ngo1} className="rounded-full shadow-lg" />
                    <Image src={Ngo2} className="rounded-full shadow-lg" />
                    <Image src={Ngo3} className="rounded-full shadow-lg" />
                    <Image src={Ngo4} className="rounded-full shadow-lg" />
                </div>
                <div className="grid grid-cols-2 gap-12 mt-4">
                    <Image src={Ngo7} className="rounded-full shadow-lg" />
                    <Image src={Ngo6} className="rounded-full shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Partnerships;