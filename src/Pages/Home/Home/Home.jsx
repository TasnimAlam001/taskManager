import { FaPlus } from "react-icons/fa";
import CreateBoard from "../CreateBoard/CreateBoard";



const Home = () => {
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

                <div onClick={() => window.my_modal_3.showModal()} className="flex mt-3 cursor-pointer btn hover:bg-slate-200 bg-transparent border-none py-2 px-4 rounded"><span className="p-2 rounded mr-3 bg-base-200"><FaPlus></FaPlus></span> <span className="pt-1"> Create a Board</span></div>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <CreateBoard></CreateBoard>
                    </form>
                </dialog>
            </div>

        </div>
    );
};

export default Home;