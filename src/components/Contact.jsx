import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, MapPin, Send, Github, Linkedin, Phone, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // TODO: Replace these placeholders with your actual EmailJS credentials
        // Get them from https://dashboard.emailjs.com/
        const SERVICE_ID = 'service_e599i6r';
        const TEMPLATE_ID = 'template_bx38kxq';
        const PUBLIC_KEY = '72q1rnpnwWCHNzwBA';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus('success');
                e.target.reset(); // Reset form fields
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
                // Clear success message after 5 seconds
                setTimeout(() => {
                    if (status === 'success') setStatus(null);
                }, 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Open to opportunities in Web Development and AI/ML.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info Side */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8">
                                Feel free to reach out regarding internships, projects, or just to connect.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:ravipgr97@gmail.com" className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">ravipgr97@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+91 9342936098</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                                    <p className="text-gray-600">Namakkal, India</p>
                                </div>
                            </div>

                            <div className="pt-6 flex gap-4">
                                <a href="https://linkedin.com/in/ravipgr97" target="_blank" rel="noreferrer" className="p-3 bg-gray-50 rounded-lg text-gray-600 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-colors" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="https://github.com/RAVI-RM07" target="_blank" rel="noreferrer" className="p-3 bg-gray-50 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors" aria-label="GitHub">
                                    <Github className="h-5 w-5" />
                                </a>
                                <a href="https://discord.gg/vzuNdfDa2y" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-3 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-colors font-medium">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                                    </svg>
                                    Join Community
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
                        {status === 'success' && (
                            <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300">
                                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                                >
                                    Send Another
                                </button>
                            </div>
                        )}

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                                    <XCircle className="h-5 w-5 flex-shrink-0" />
                                    <span>Failed to send message. Please check your config or try again later.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
