import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', message: '' };

export default function Contact() {
  // "Controlled inputs": the input's value comes FROM React state, and
  // every keystroke updates that state via onChange. This means React
  // is always the single source of truth for what's in the form —
  // vs. "uncontrolled" inputs where the DOM holds the value itself.
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Message is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault(); // stop the browser's default full-page-reload form submit
    if (!validate()) return;

    // TODO: wire this up to a real backend/email service (e.g. Formspree,
    // EmailJS, or your own API route) — this just simulates success.
    setSubmitted(true);
    setForm(initialForm);
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-xl px-6 py-24 text-center">
        <p className="font-mono text-sm text-accent">$ mail sent ✓</p>
        <h1 className="mt-4 font-mono text-2xl font-bold text-text-bright">Thanks for reaching out!</h1>
        <p className="mt-2">I'll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-xl px-6 py-16">
      <p className="mb-2 font-mono text-sm text-accent">$ mail --compose</p>
      <h1 className="mb-8 font-mono text-3xl font-bold text-text-bright">Get In Touch</h1>

      <ul className="mb-10 flex flex-wrap gap-4 font-mono text-sm">
        <li>
          <a href="mailto:rahulatwork15@gmail.com" className="text-accent hover:underline">
            rahulatwork15@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/rahsharma6969" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rahul-sharma-453599254/"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block font-mono text-sm text-text-bright">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-text-bright outline-none focus:border-accent"
          />
          {errors.name && <p className="mt-1 text-xs text-warn">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-mono text-sm text-text-bright">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-text-bright outline-none focus:border-accent"
          />
          {errors.email && <p className="mt-1 text-xs text-warn">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block font-mono text-sm text-text-bright">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-text-bright outline-none focus:border-accent"
          />
          {errors.message && <p className="mt-1 text-xs text-warn">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
