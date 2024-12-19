import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const { loginUser, resetPassword } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword]=useState();

    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess("User Login Successfully.");
                setLoginError(''); // Clear error message on successful login
                form.reset();
                navigate("/"); // Use the navigate function for programmatic navigation
            })
            .catch((error) => {
                console.log(error.message);
                setSuccess(''); // Clear success message on error
                setLoginError(error.message);
            });
    };



    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            alert("please enter email")
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            alert('please write a valid email')
        }

        resetPassword(email)
            .then(result => {
                setSuccess('Please Check Your Email & Reset Your Password')
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/dark-blue-vector-template-with-circles_6869-1106.jpg')" }}
        >
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
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
                                ref={emailRef}
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

                    <button onClick={handleForgetPassword} className="hover:underline ml-1 mt-2 text-white flex justify-start">Forget Password?</button>
                    {
                        success && <span className="text-white">{success}</span>
                    }
                    {
                        loginError && <span className="text-white">{loginError}</span>
                    }
                    <div className="form-control mt-6 mb-2">
                        <button className="btn btn-secondary">Login</button>
                    </div>
                    <p className="text-white">Do Not Have An Account!<Link to="/registration" className="ml-1 hover:underline hover:text-blue-700 ">Registration Now</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
