import Image from 'next/image';
import AnimalFamily from '../../../../public/AnimalFamily.png'; // Update the path to your image

const Achievements = () => {
    return (
        <div className="mt-20 py-20 flex flex-row gap-32 items-center justify-between px-28 bg-slate-50">
            <div className="overflow-visible">
                <Image
                    src={AnimalFamily}
                    alt="Adoptable Animal"
                    className="w-[300vw] h-[60vh] object-cover transform scale-150"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
                <h1 className="font-bold text-4xl gap-4 flex flex-col justify-center items-center whitespace-nowrap">
                    "Because every tail deserves to <br />
                    <p className="text-pink-500 rounded-lg px-2 w-max text-center">
                        wag
                    </p>
                </h1>

                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-20">
                        <div className="text-center">
                            <h1 className="font-bold text-2xl">
                                1500<span className="text-green-500">+</span> <br />
                                <span className="text-xl"> Animals Rescued</span>
                            </h1>
                            <p className="font-medium  pt-2 text-slate-500">
                                "Be a part of our <br /> rescue missions."
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="font-bold text-2xl">
                                600<span className="text-green-500">+</span> <br />
                                <span className="text-xl whitespace-nowrap">
                                    Volunteers Engaged
                                </span>
                            </h1>
                            <p className="font-medium pt-2 text-slate-500">
                                "Join our dedicated <br /> team of volunteers."
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-20">
                        <div className="text-center">
                            <h1 className="font-bold text-2xl">
                                120<span className="text-green-500">+</span> <br />
                                <span className="text-xl whitespace-nowrap">
                                    Events Organized
                                </span>
                            </h1>
                            <p className="font-medium pt-2 text-slate-500">
                                "Participate in our events <br /> to support animal welfare."
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="font-bold text-2xl">
                                50<span className="text-green-500">+</span> <br />
                                <span className="text-xl whitespace-nowrap">
                                    Partnerships Formed
                                </span>
                            </h1>
                            <p className="font-medium pt-2 text-slate-500">
                                "Collaborating with organizations <br /> for a greater
                                impact."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;