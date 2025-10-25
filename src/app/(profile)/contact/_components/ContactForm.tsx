'use client';

import { CustomNotification } from "@/components/custom/CustomNotification";
import { ChangeEvent, FormEvent, useState } from "react";
interface UserDetails {
    fullName: string;
    email: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    message?: string;
    error?: string;
    data?: {
        id: string;
        name: string;
        email: string;
        remainingMessages?: number;
    };
}

export default function ContactForm() {

    const initialUserDetails: UserDetails = {
        fullName: '',
        email: '',
        message: '',
    };
    const [userDetails, setUserDetails] = useState<UserDetails>(initialUserDetails)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [notification, setNotification] = useState<{
        show: boolean;
        message: string;
        type: 'success' | 'error' | 'warning' | 'info';
    }>({ show: false, message: '', type: 'info' })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userDetails.fullName,
                    email: userDetails.email.toLowerCase(),
                    message: userDetails.message,
                }),
            });

            const data: ApiResponse = await response.json();

            if (response.ok && data.success) {
                setNotification({
                    show: true,
                    message: data.message || 'Message sent successfully! I\'ll get back to you soon.',
                    type: 'success'
                });
                setUserDetails(initialUserDetails);
            } else {
                setNotification({
                    show: true,
                    message: data.error || 'Failed to send message. Please try again.',
                    type: 'error'
                });
            }
        } catch {
            setNotification({
                show: true,
                message: 'Network error. Please check your connection and try again.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="w-full h-full bg-white/60 dark:bg-[#1E293B]/60 backdrop-blur-xl border border-[#E2E8F0]/60 dark:border-transparent sm:dark:border-[#334155] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-5 sm:gap-6">
                <div className="flex flex-col gap-2 mb-2">
                    <h3 className="text-[1.25rem] leading-[1.3] sm:text-[2rem] sm:leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        Send Me a Message
                    </h3>
                    <p className="text-[0.875rem] sm:text-[0.9375rem] text-[#64748B] dark:text-[#94A3B8] leading-[1.5]">
                        I&apos;ll get back to you as soon as possible!
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="FullName" className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                            Your Name <span className="text-[1rem] font-semibold text-[#EF4444] dark:text-[#F87171]">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            id="fullName"
                            name='fullName'
                            value={userDetails.fullName}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            autoComplete="name"
                            className="p-3 sm:p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[0.9375rem] sm:text-[0.9375rem] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                            Your Email <span className="text-[1rem] font-semibold text-[#EF4444] dark:text-[#F87171]">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            name='email'
                            id="email"
                            disabled={isSubmitting}
                            autoComplete="email"
                            value={userDetails.email}
                            onChange={handleChange}
                            className="p-3 sm:p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[0.9375rem] sm:text-[0.9375rem] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                            Your Message <span className="text-[1rem] font-semibold text-[#EF4444] dark:text-[#F87171]">*</span>
                        </label>
                        <textarea
                            placeholder="Tell me about your project or idea..."
                            rows={3}
                            name="message"
                            id="message"
                            disabled={isSubmitting}
                            value={userDetails.message}
                            onChange={handleChange}
                            className="p-3 sm:p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[0.9375rem] sm:text-[0.9375rem] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="group mt-2 cursor-pointer w-full px-6 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] dark:from-[#60A5FA] dark:to-[#3B82F6] text-white text-[0.9375rem] sm:text-[0.9375rem] font-semibold rounded-full shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]">
                        <span className="flex items-center justify-center gap-2">
                            {isSubmitting ? (
                                <>
                                    {/* Spinner Loader */}
                                    <svg
                                        className="animate-spin h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4">
                                        </circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </>
                            )}
                        </span>
                    </button>
                </form>

            </div>
            {notification.show && (
                <CustomNotification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification({ ...notification, show: false })}
                />
            )}
        </>
    );
}