import { Link, NavLink, Outlet } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import call from '../assets/call.svg'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from 'sweetalert2'
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init";

const Root = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    Swal.fire(
                        'Logged out',
                        'You have successfully logged out.',
                        'success'
                    )
                }).catch(err => console.log(err))

            }
        })
    }

    return (
        <div className="">
            {/* navbar  */}
            <div className="navbar bg-white w-full md:px-16 py-3 shadow-md fixed z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>About</NavLink>
                            <NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Blogs</NavLink>
                            <NavLink to="/events" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Events</NavLink>
                            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Contact</NavLink>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">VolunteersHUB</a> */}
                    <h1 className="text-xl md:text-3xl font-semibold">VolunteersHUB</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal flex gap-7 text-[17px] px-1">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>About</NavLink>
                        <NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Blogs</NavLink>
                        <NavLink to="/events" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Events</NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF6045 font-semibold" : ""}>Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="mr-3 md:mr-5" src={call} alt="" />
                    {user ? <div className="">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/k4KVQ13/6596121.png'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-72">
                                <li><a className="justify-between">{user.displayName}</a></li>
                                <li><a>{user.email}</a></li>
                                <li className="text-red-600 font-bold" onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                    </div> :
                        <div className="">  <Link Link to={'login'} className="btn px-5 hover:bg-[#cd6856] bg-[#FF6045] text-white font-bold">Login <FiLogIn className="text-xl" /> </Link></div>}
                </div>
            </div>

            {/* Outlet */} <div className=""><Outlet /></div> {/* Outlet */}

            {/* footer */}
            <footer className="footer mt-36 p-10 text-white h-72 bg-[#1F3155] pt-20">
                <nav>
                    <header className="text-xl font-bold">VolunteersHUB</header>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit <br /> amet consectetur. <br /> Nullam tristique nunc <br /> velit nunc vel dolor.
                    </p>
                </nav>
                <nav className="">
                    <header className="text-xl font-bold">COMPANY</header>
                    <a className="link link-hover text-gray-400">Home</a>
                    <a className="link link-hover text-gray-400">Listing</a>
                    <a className="link link-hover text-gray-400">Property</a>
                    <a className="link link-hover text-gray-400">Services</a>
                    <a className="link link-hover text-gray-400">Blog</a>

                </nav>
                <nav>
                    <header className="text-xl font-bold">CONTACT US</header>
                    <div className="flex gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                        <p>(234)828-99192</p>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p>contact@gmail.com</p>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p>street 49, London</p>
                    </div>
                </nav>
                <form>
                    <header className="text-xl font-bold ">NEWSLETTER</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-gray-400">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered text-gray-400 w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <div className="bg-[#1F3155] h-14 border-t text-white">
                <p className="text-center mt-4">Copyright © 2023 All Rights</p>
            </div>
        </div >
    );
};

export default Root;