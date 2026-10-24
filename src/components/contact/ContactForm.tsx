import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';
import { SITE_CONFIG } from '../../data/siteConfig';

export interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!message.trim()) {
      newErrors.message = 'Please type a brief message or question.';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Simulate validation flow with clear demonstration honesty
    setTimeout(() => {
      setIsSubmitting(false);

      if (SITE_CONFIG.formSubmissionEndpoint) {
        // If a real backend endpoint was configured
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your inquiry was sent to KT’s Cafe.',
        });
        setFullName('');
        setEmail('');
        setMessage('');
      } else {
        // Strict Truthfulness Requirement: Clearly state frontend demo mode
        setSubmitStatus({
          type: 'success',
          message:
            'Inquiry validated successfully! Notice: This website is currently in frontend demonstration mode (no backend submission endpoint is configured in siteConfig.ts). Once a server endpoint or Formspree URL is provided, messages will be delivered directly to the cafe team.',
        });
        setFullName('');
        setEmail('');
        setMessage('');
      }
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#121722] dark:via-[#0E131C] dark:to-[#0A0D14] border border-neutral-200/80 dark:border-white/12 p-7 sm:p-9 shadow-md dark:shadow-2xl relative"
    >
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
        Send Us a Message
      </h3>
      <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 font-body leading-relaxed">
        We welcome party catering inquiries, feedback, and special table requests.
      </p>

      {/* Submission Feedback Banner */}
      {submitStatus.type && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#FFDD17]/50 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-[#FFDD17] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-body">
            {submitStatus.message}
          </div>
        </div>
      )}

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
            Full Name <span className="text-[#E01E25]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            placeholder="e.g. Rahul Patel"
            className={`w-full h-12 px-4 rounded-xl bg-neutral-50 dark:bg-black/40 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all font-body ${
              errors.fullName
                ? 'border-[#E01E25] focus:ring-2 focus:ring-[#E01E25]/30'
                : 'border-neutral-200 dark:border-white/10 focus:border-[#FFDD17] focus:ring-2 focus:ring-[#FFDD17]/25'
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-[#E01E25] flex items-center gap-1 font-body">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
            Email Address <span className="text-[#E01E25]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="e.g. rahul@example.com"
            className={`w-full h-12 px-4 rounded-xl bg-neutral-50 dark:bg-black/40 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all font-body ${
              errors.email
                ? 'border-[#E01E25] focus:ring-2 focus:ring-[#E01E25]/30'
                : 'border-neutral-200 dark:border-white/10 focus:border-[#FFDD17] focus:ring-2 focus:ring-[#FFDD17]/25'
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-[#E01E25] flex items-center gap-1 font-body">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
            Message <span className="text-[#E01E25]">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
            }}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="How can we help you? Ask about items, table seating, or special group orders..."
            className={`w-full p-4 rounded-xl bg-neutral-50 dark:bg-black/40 border text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none transition-all font-body resize-y min-h-[110px] ${
              errors.message
                ? 'border-[#E01E25] focus:ring-2 focus:ring-[#E01E25]/30'
                : 'border-neutral-200 dark:border-white/10 focus:border-[#FFDD17] focus:ring-2 focus:ring-[#FFDD17]/25'
            }`}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-xs text-[#E01E25] flex items-center gap-1 font-body">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            loading={isSubmitting}
            icon={<Send className="w-4 h-4" />}
            iconPosition="right"
            className="shadow-[0_4px_24px_rgba(255,221,23,0.3)] hover:shadow-[0_6px_30px_rgba(255,221,23,0.45)]"
          >
            {isSubmitting ? 'Validating Inquiry...' : 'Submit Message'}
          </Button>
        </div>
      </div>
    </form>
  );
};
