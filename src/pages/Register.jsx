import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { data } from 'autoprefixer';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [conShowPassword, setConShowPassword] = useState(false);
    const { signUpUserWithEmailAndPassword, user } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        const userDoc = { name, email, password }
        console.log(userDoc);

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character');
            return;

        } else if (password !== conPassword) {
            toast.error("Password did not match");
            return;
        }

        signUpUserWithEmailAndPassword(email, password).then(() => {
            updateProfile(auth.currentUser, { displayName: name });
            sendEmailVerification(auth.currentUser).then(() => {
                toast.success('Verification email  sent!');

                fetch('https://volunteers-hub-server.vercel.app/user', {

                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userDoc)

                }).then(res => res.json()).then(data => console.log(data))
            });

        }).catch(err => {
            if (err.code == "auth/email-already-in-use") {
                toast.error("Email already in use");
            }
        })

    };

    return (
        <div className="" data-aos="zoom-out">
            <div className="pt-20 flex justify-center">
                <div className="my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
                    <form className="" onSubmit={handleRegister}>
                        <div className="mb-10">
                            <h3 className="text-3xl font-extrabold">Register</h3>
                        </div>
                        <div className="">
                            <div className='mb-6'>
                                {/* <label className="text-sm mb-2 block">Name</label> */}
                                <div className="relative flex items-center">
                                    <input name="name" type="text" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter full name" />
                                </div>
                            </div>
                            <div>
                                {/* <label className="text-sm mb-2 block">Email</label> */}
                                <div className="relative flex items-center">
                                    <input name="email" type="email" required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter email address" />
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className="mt-6">
                            {/* <label className="text-sm mb-2 block">Password</label> */}
                            <div className="relative flex items-center">
                                <input name="password" type={showPassword ? "text" : "password"} required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Password" />
                                <span className='-mt-4' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash className="w-[18px] h-[18px] absolute right-4 cursor-pointer" /> :
                                        <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            {/* <label className="text-sm mb-2 block">Confirm password</label> */}
                            <div className="relative flex items-center">
                                <input name="conPassword" type={conShowPassword ? "text" : "password"} required className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Confirm password" />
                                <span className='-mt-4' onClick={() => setConShowPassword(!conShowPassword)}>
                                    {conShowPassword ? <FaEyeSlash className="w-[18px] h-[18px] absolute right-4 cursor-pointer" /> :
                                        <FaEye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />}
                                </span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                Register
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center">Already have an account? <Link className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap" to={"/login"}>Login here</Link></p>
                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;