import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword]=useState();
    const [showConfirmPassword, setShowConfirmPassword]=useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const termsAccepts = form.terms.checked;

        if (!termsAccepts) {
            setRegisterError("You must accepts all terms and conditions before registration.");
            return;
        }

        if (password !== confirmPassword) {
            setRegisterError("Passwords dose not match.");
            return;
        }
        if(password.length < 8){
            setRegisterError("password should be minimum eight character or longer");
            return;
        }else if(!/[A-Z]/.test(password)){
            setRegisterError("Password should be at lest one UpperCase Character");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("User registration successfully.");
                setRegisterError(''); // Clear previous errors
                form.reset();
                navigate("/");
            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message);
                setSuccess(''); // Clear previous success messages
            });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-vector/abstract-wave-lines-colorful-blue-isolated-dark-background-concept-ai-technology-digital_551880-276.jpg?semt=ais_hybrid')",
            }}
        >
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 mt-6 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <p className="block text-white text-sm font-medium mb-2">Email</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email"
                                className="grow"
                                name="email"
                                placeholder="Email" />
                        </label>
                    </div>

                    <div className="mt-6">
                        <p className="block text-white text-sm font-medium mb-2">Password</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type={showPassword ? "text" : "password"} className="grow" name="password" placeholder="Password" required/>
                            
                            <span onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        !showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </span>
                        </label>
                    </div>

                    <div className="mt-6">
                        <p className="block text-white text-sm font-medium mb-2">Confirm Password</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type={showConfirmPassword ? "text" : "password"} className="grow" name="confirmPassword" placeholder="Confirm Password"  required/>
                            
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {
                                        !showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </span>
                        </label>
                    </div>
                    <div className="mb-6 mt-6 flex items-center">
                        <input type="checkbox" name="terms" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-white text-sm">
                            I accept All{" "}
                            <Link to="/terms" className="text-blue-300 hover:text-blue-400">
                                Terms and Conditions
                            </Link>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-white mt-6 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-300 hover:text-blue-400">
                        Login
                    </Link>
                </p>
                {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
                {registerError && <p className="mt-4 text-red-500 text-center">{registerError}</p>}
            </div>
        </div>
    );
};

export default Registration;
