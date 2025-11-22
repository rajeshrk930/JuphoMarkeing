"use client";

import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  website: string;
  spend: string;
  message: string;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  website: "",
  spend: "",
  message: "",
  consent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | undefined>();

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);
    
    // Basic validation
    if (!form.name || !form.email || !form.spend || !form.consent) {
      setError("Please complete required fields and consent.");
      return;
    }
    
    setStatus("submitting");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      
      if (!res.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      setForm(initialState);
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Submission failed");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-4">
          {/* Name */}
          <div>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update}
              className="w-full border-0 border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-brand transition-colors text-gray-900 placeholder-gray-600"
              placeholder="Your name?"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              className="w-full border-0 border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-brand transition-colors text-gray-900 placeholder-gray-600"
              placeholder="Your Email address?"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={update}
              className="w-full border-0 border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-brand transition-colors text-gray-900 placeholder-gray-600"
              placeholder="Your Phone Number?"
            />
          </div>

          {/* Monthly Ad Spend */}
          <div>
            <input
              id="spend"
              name="spend"
              value={form.spend}
              onChange={update}
              className="w-full border-0 border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-brand transition-colors text-gray-900 placeholder-gray-600"
              placeholder="What's your budget?"
              required
            />
          </div>

          {/* Website */}
          <div>
            <input
              id="website"
              name="website"
              value={form.website}
              onChange={update}
              className="w-full border-0 border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-brand transition-colors text-gray-900 placeholder-gray-600"
              placeholder="Your Website?"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={update}
              rows={3}
              className="w-full border-0 border-b-2 border-gray-300 px-0 py-3 bg-transparent focus:outline-none focus:border-brand transition-colors text-gray-900 placeholder-gray-600 resize-none"
              placeholder="Tell us about your project"
            />
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={update}
            className="mt-1 h-5 w-5 rounded border-gray-300 text-brand focus:ring-brand"
            required
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I agree to be contacted regarding this audit request *
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-700 font-medium bg-red-50 border-l-4 border-red-500 rounded-lg p-4 flex items-start gap-3 animate-shake">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Success Message */}
        {status === "success" && (
          <div className="text-sm text-green-700 font-semibold bg-green-50 border-l-4 border-green-500 rounded-lg p-4 flex items-start gap-3 animate-slideIn">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <div className="font-bold mb-1">Submitted Successfully!</div>
              <div className="text-xs text-green-600">We'll get back to you within 24 hours.</div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-gradient-to-r from-brand to-blue-600 text-white py-4 rounded-lg font-semibold text-base hover:from-blue-600 hover:to-brand transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Book A Call</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        <span>Your data is secure. We never share your information.</span>
      </div>
    </div>
  );
}
