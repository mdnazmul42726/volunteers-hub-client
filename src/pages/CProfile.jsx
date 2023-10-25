import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";

const CProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="pt-20">

                <div className="h-screen pt-12">

                    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="border-b px-4 pb-6">
                            <div className="text-center my-4">
                                <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                                    src={user.photoURL ? user.photoURL : 'https://i.ibb.co/k4KVQ13/6596121.png'} alt="" />
                                <div className="py-2">
                                    <h3 className="font-bold text-2xl text-gray-800 mb-1">{user.displayName}</h3>
                                    <div className="inline-flex text-gray-700  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                        </svg>
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 px-2">
                                <Link to={'/community/publish_event'}><button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">Publish Event
                                </button></Link>
                                <button
                                    className="flex-1 rounded-full border-2 border-gray-400  font-semibold text-black px-4 py-2">
                                    Donate
                                </button>
                            </div>
                        </div>
                        <div className="px-4 py-4">
                            <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                                <span><strong className="text-black">Your Events</strong> </span>
                            </div>
                            <div className="jhj">Blog 1</div>
                            <div className="jhj">Blog 1</div>
                            <div className="jhj">Blog 1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CProfile;