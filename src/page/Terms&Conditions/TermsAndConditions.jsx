const TermsAndConditions = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
                <div className="text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, please do not use this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. User Accounts</h2>
                        <p>
                            To use certain features of this website, you may be required to create an account. You agree to provide accurate and complete information and to keep your account credentials secure. You are responsible for all activities that occur under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Use of Website</h2>
                        <p>
                            You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website. Prohibited actions include, but are not limited to, hacking, distributing harmful software, and posting offensive content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, images, logos, and code, is the property of the website owner or its licensors and is protected by copyright and trademark laws. Unauthorized use or distribution of this content is prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
                        <p>
                            This website is provided on an "as-is" basis. We make no guarantees regarding the accuracy, reliability, or availability of the website or its content. We shall not be liable for any damages arising from the use or inability to use this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">6. Privacy Policy</h2>
                        <p>
                            Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using this website, you consent to our data practices as outlined in the Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms and conditions at any time. Your continued use of the website after any changes are made constitutes your acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
