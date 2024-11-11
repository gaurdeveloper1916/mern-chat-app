import React, { useState } from "react";
import "./home.css";

const Homepage = () => {
    const [loginState, setLoginState] = useState(true);
    const [passVisibility, setPassVisibility] = useState({
        login: false,
        signupPassword: false,
        confirmPassword: false,
    });

    const Login = () => {
        setLoginState(true);
    };

    const Signup = () => {
        setLoginState(false);
    };

    const togglePassVisibility = (field) => {
        setPassVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <div className="grid items-center justify-center signin-bg-image">
            <div className="bg-white w-96 max-h-fit p-5 rounded flex flex-col jus">
                <div className="grid grid-flow-row grid-cols-2 gap-2 justify-between">
                    <button
                        onClick={Login}
                        className={`col-span-1 rounded-full py-1 cursor-pointer ${loginState ? "bg-blue-100" : ""}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={Signup}
                        className={`col-span-1 rounded-full py-1 cursor-pointer ${!loginState ? "bg-blue-100" : ""}`}
                    >
                        Sign up
                    </button>
                </div>

                {/* Login Form */}
                <form className={`mt-5 px-3 ${loginState ? "block" : "hidden"}`}>
                    <div>
                        <label className="text-black">Email Address <span className="text-red-500">*</span></label>
                        <input required type="email" className="w-full rounded px-2 py-1 border" placeholder="xyz@gmail.com" />
                    </div>
                    <div className="mt-3">
                        <label className="text-black">Password<span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                required
                                type={passVisibility.login ? 'text' : 'password'}
                                className="w-full rounded px-2 py-1 border"
                                placeholder="*********"
                            />
                            <button
                                type="button"
                                className="absolute ml-[-3.6rem] mt-1.5 border rounded text-[13px] px-2 cursor-pointer"
                                onClick={() => togglePassVisibility('login')}
                            >
                                {passVisibility.login ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="w-full border py-1 rounded bg-blue-400 text-white">Login</button>
                    </div>
                </form>

                {/* Signup Form */}
                <form className={`mt-5 px-3 ${!loginState ? "block" : "hidden"}`}>
                    <div>
                        <label className="text-black">Name <span className="text-red-500">*</span></label>
                        <input required className="w-full rounded px-2 py-1 border" placeholder="Enter Your Name" />
                    </div>
                    <div className="mt-3">
                        <label className="text-black">Email Address <span className="text-red-500">*</span></label>
                        <input type="email" required className="w-full rounded px-2 py-1 border" placeholder="xyz@gmail.com" />
                    </div>
                    <div className="mt-3">
                        <label className="text-black">Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                required
                                type={passVisibility.signupPassword ? 'text' : 'password'}
                                className="w-full rounded px-2 py-1 border"
                                placeholder="*********"
                            />
                            <button
                                type="button"
                                className="absolute ml-[-3.6rem] mt-1.5 border rounded text-[13px] px-2 cursor-pointer"
                                onClick={() => togglePassVisibility('signupPassword')}
                            >
                                {passVisibility.signupPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-black">Confirm Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <input
                                required
                                type={passVisibility.confirmPassword ? 'text' : 'password'}
                                className="w-full rounded px-2 py-1 border"
                                placeholder="*********"
                            />
                            <button
                                type="button"
                                className="absolute ml-[-3.6rem] mt-1.5 border rounded text-[13px] px-2 cursor-pointer"
                                onClick={() => togglePassVisibility('confirmPassword')}
                            >
                                {passVisibility.confirmPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-black">Upload File <span className="text-red-500">*</span></label>
                        <input type="file" className="w-full rounded px-2 py-1 border" />
                    </div>
                    <div className="mt-4">
                        <button className="w-full border py-1 rounded bg-blue-400 text-white">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Homepage;
