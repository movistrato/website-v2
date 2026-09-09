'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

type TopicKey = 'faro' | 'tech' | 'partners' | 'general';

interface FormState {
  name: string;
  email: string;
  organization: string;
  topic: TopicKey;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FieldBeamFrameProps {
  children: React.ReactNode;
  hasError?: boolean;
}

function FieldBeamFrame({ children, hasError }: FieldBeamFrameProps) {
  return (
    <div
      className={`relative group p-[1px] overflow-hidden isolate [contain:paint] transition-all w-full max-w-full ${
        hasError ? 'bg-red-500/80' : 'bg-border/60 hover:bg-border/90'
      }`}
    >
      {/* 360° Perimeter Rotating Beam on hover and focus-within */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350%] aspect-square animate-beam-spin pointer-events-none transition-opacity duration-500 ${
          hasError
            ? 'opacity-0'
            : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'
        } bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#D9A62E_340deg,#FFFFFF_360deg)]`}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-full bg-surface/95 dark:bg-surface/90">
        {children}
      </div>
    </div>
  );
}

export function ContactForm() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    topic: 'faro',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedV1, setSubmittedV1] = useState(false);

  const topics: { key: TopicKey; label: string }[] = [
    { key: 'faro', label: t('topics.faro') },
    { key: 'tech', label: t('topics.tech') },
    { key: 'partners', label: t('topics.partners') },
    { key: 'general', label: t('topics.general') },
  ];

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = t('feedback.err_name');
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = t('feedback.err_email');
    }
    if (form.message.trim().length < 10) nextErrors.message = t('feedback.err_message');
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation response; real SMTP backend is built in V3
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedV1(true);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 w-full">
      {/* 01: Topic Selector */}
      <div className="flex flex-col gap-3">
        <label className="font-mono text-[10px] tracking-widest text-muted uppercase">
          {t('form.topic_label')}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {topics.map(({ key, label }) => {
            const isSelected = form.topic === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setForm(prev => ({ ...prev, topic: key }))}
                className={`py-2.5 px-2 sm:px-3 text-center sm:text-left font-mono text-[10px] sm:text-[11px] tracking-wider uppercase border transition-all truncate ${
                  isSelected 
                    ? 'border-brand-gold bg-brand-gold/10 text-brand-gold font-medium' 
                    : 'border-border/60 hover:border-border text-muted hover:text-foreground bg-surface/30'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 02: Name & Email Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="contact-name" className="font-mono text-[10px] tracking-widest text-muted uppercase">
            {t('form.name_label')}
          </label>
          <FieldBeamFrame hasError={Boolean(errors.name)}>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              value={form.name}
              placeholder={t('form.name_placeholder')}
              onChange={e => {
                setForm(prev => ({ ...prev, name: e.target.value }));
                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
              }}
              className="w-full min-w-0 px-4 py-3 bg-transparent text-foreground placeholder:text-muted/60 placeholder:font-mono placeholder:text-xs placeholder:tracking-wider placeholder:italic font-mono text-sm tracking-wide focus:outline-none"
            />
          </FieldBeamFrame>
          {errors.name && <span role="alert" className="font-mono text-xs text-red-500">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="contact-email" className="font-mono text-[10px] tracking-widest text-muted uppercase">
            {t('form.email_label')}
          </label>
          <FieldBeamFrame hasError={Boolean(errors.email)}>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              value={form.email}
              placeholder={t('form.email_placeholder')}
              onChange={e => {
                setForm(prev => ({ ...prev, email: e.target.value }));
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
              }}
              className="w-full min-w-0 px-4 py-3 bg-transparent text-foreground placeholder:text-muted/60 placeholder:font-mono placeholder:text-xs placeholder:tracking-wider placeholder:italic font-mono text-sm tracking-wide focus:outline-none"
            />
          </FieldBeamFrame>
          {errors.email && <span role="alert" className="font-mono text-xs text-red-500">{errors.email}</span>}
        </div>
      </div>

      {/* 03: Organization (Optional) */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="contact-org" className="font-mono text-[10px] tracking-widest text-muted uppercase">
            {t('form.org_label')}
          </label>
          <span className="font-mono text-[10px] text-muted-foreground">{t('form.org_optional')}</span>
        </div>
        <FieldBeamFrame>
          <input
            id="contact-org"
            type="text"
            autoComplete="organization"
            value={form.organization}
            placeholder={t('form.org_placeholder')}
            onChange={e => setForm(prev => ({ ...prev, organization: e.target.value }))}
            className="w-full min-w-0 px-4 py-3 bg-transparent text-foreground placeholder:text-muted/60 placeholder:font-mono placeholder:text-xs placeholder:tracking-wider placeholder:italic font-mono text-sm tracking-wide focus:outline-none"
          />
        </FieldBeamFrame>
      </div>

      {/* 04: Message Field */}
      <div className="flex flex-col gap-2 min-w-0">
        <label htmlFor="contact-message" className="font-mono text-[10px] tracking-widest text-muted uppercase">
          {t('form.message_label')}
        </label>
        <FieldBeamFrame hasError={Boolean(errors.message)}>
          <textarea
            id="contact-message"
            rows={6}
            value={form.message}
            placeholder={t('form.message_placeholder')}
            onChange={e => {
              setForm(prev => ({ ...prev, message: e.target.value }));
              if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
            }}
            className="w-full min-w-0 px-4 py-3 bg-transparent text-foreground placeholder:text-muted/60 placeholder:font-mono placeholder:text-xs placeholder:tracking-wider placeholder:italic font-mono text-sm tracking-wide leading-relaxed resize-y min-h-[140px] focus:outline-none"
          />
        </FieldBeamFrame>
        {errors.message && <span role="alert" className="font-mono text-xs text-red-500">{errors.message}</span>}
      </div>

      {/* V1 Preview Notification */}
      {submittedV1 && (
        <div className="p-4 border border-brand-gold/40 bg-brand-gold/5 flex flex-col gap-1.5" role="status">
          <span className="font-mono text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
            {t('feedback.v1_badge')}
          </span>
          <p className="font-sans text-xs text-foreground/90 leading-relaxed">
            {t('feedback.v1_notice')}
          </p>
        </div>
      )}

      {/* Action Row: CTA & Privacy Microcopy */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-border/40">
        <p className="font-sans text-xs text-muted max-w-sm leading-normal">
          {t('form.privacy_notice')}{' '}
          <Link href="/privacy" className="text-foreground hover:text-brand-gold underline underline-offset-4 transition-colors">
            {t('form.privacy_link')}
          </Link>.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative inline-flex items-center justify-center gap-4 bg-foreground text-background dark:bg-[#F2F0E9] dark:text-[#080806] px-8 py-4 font-mono text-xs tracking-widest uppercase font-medium hover:bg-brand-gold hover:text-white dark:hover:bg-brand-gold dark:hover:text-[#080806] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <span>{isSubmitting ? t('form.submitting_cta') : t('form.submit_cta')}</span>
        </button>
      </div>
    </form>
  );
}
