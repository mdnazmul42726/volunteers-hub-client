import { Link } from "react-router-dom";

const XLogin = () => {

    return (
        <div className="pt-32 ">
            <div className="w-1/2 mx-auto pb-32 text-center border">
                <h1 className="text-3xl text-center mt-32 font-bold">Welcome to VolunteersHUB</h1>
                <p className="text-xl mt-4">Login as</p>
                <div className=" mt-5">
                    <div className="flex justify-center gap-3">
                        <Link to={'/volunteer_login'}><button className="bg-sky-500 hover:bg-sky-700 transition-all px-4 py-2 rounded-sm text-white">Volunteer</button></Link>
                        <Link to={"/community_login"}> <button className="bg-sky-500 hover:bg-sky-700 transition-all px-4 py-2 rounded-sm text-white">Community</button></Link>
                        <Link to={"/moderator_login"}><button className="bg-sky-500 hover:bg-sky-700 transition-all px-4 py-2 rounded-sm text-white">Moderator</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default XLogin;