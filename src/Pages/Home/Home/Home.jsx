import { FaPlus } from "react-icons/fa";
import CreateBoard from "../CreateBoard/CreateBoard";
import { useState } from "react";




const Home = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };


    return (
        <div className=" md:flex gap-8 m-8">
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-8">
                <figure><img src="https://i.ibb.co/B3nvf7n/74-748268-social-media-cover-page-design-hd-png-download.png" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Stay on track and up to date</h2>
                    <p>Invite people to boards and cards, leave comments, add due dates, and we`ll show the most important activity here.</p>

                </div>
            </div>
            <div className="pt-8">
                <p>Links</p>
                <div>
                    <div onClick={showModal} className="flex mt-3 cursor-pointer btn hover:bg-slate-200 bg-transparent border-none py-2 px-4 rounded"><span className="p-2 rounded mr-3 bg-base-200"><FaPlus></FaPlus></span> <span className="pt-1"> Create a Board</span></div>
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 flex items-center justify-center z-50"
                            onClick={closeModal}
                        >
                            <div
                                className="bg-white p-6 rounded shadow-md w-96"
                                onClick={stopPropagation} 
                            >
                                <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-600">
                                    <span className="sr-only">Close</span>&times;
                                </button>
                                <CreateBoard></CreateBoard>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Home;