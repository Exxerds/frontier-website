'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(2, 'Subject required'),
  message: z.string().min(10, 'Message required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClassName =
  'w-full bg-[#1a1a1a] border border-[#444] px-4 py-3 font-inter text-sm text-[#f5f5f0] placeholder:text-steel focus:border-accent focus:outline-none';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          machineTitle: data.subject,
          message: `Subject: ${data.subject}\n\n${data.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      toast.success("Message sent! We'll be in touch soon.");
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 bg-surface p-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name')} placeholder="Your Name" className={inputClassName} />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name.message}</p> : null}
      </div>

      <div>
        <input
          {...register('phone')}
          placeholder="Your Phone Number"
          className={inputClassName}
        />
        {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p> : null}
      </div>

      <div>
        <input
          {...register('email')}
          placeholder="Your Email Address"
          className={inputClassName}
        />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email.message}</p> : null}
      </div>

      <div>
        <input {...register('subject')} placeholder="Subject" className={inputClassName} />
        {errors.subject ? (
          <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
        ) : null}
      </div>

      <div>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="How can we help?"
          className={inputClassName}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent py-4 font-oswald text-lg uppercase tracking-wider text-white transition-colors hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
}
