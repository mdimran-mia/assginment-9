import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const termsAccepts = form.terms.checked;

        if (!termsAccepts) {
            alert("You must accepts all terms and conditions before registration.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords dose not match.");
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
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 mt-16 rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                            Email Address
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
                    <div className="mb-4">
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
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-white text-sm font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <div className="mb-6 flex items-center">
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
