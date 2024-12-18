import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

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

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/dark-blue-vector-template-with-circles_6869-1106.jpg')" }}
        >
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-white mt-6 text-center">
                    Don't have an account?{" "}
                    <Link to="/registration" className="text-blue-300 hover:text-blue-400">
                        Sign Up
                    </Link>
                </p>
                {success && (
                    <p className="mt-4 text-center text-green-500 font-medium">{success}</p>
                )}
                {loginError && (
                    <p className="mt-4 text-center text-red-500 font-medium">{loginError}</p>
                )}
            </div>
        </div>
    );
};

export default Login;
