'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import SuccessModal from './SuccessModal';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message required'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

type InquiryFormProps = {
  machineTitle: string;
};

const inputClassName =
  'w-full bg-[#1a1a1a] border border-[#444] px-4 py-3 font-inter text-sm text-[#f5f5f0] placeholder:text-steel focus:border-accent focus:outline-none';

export default function InquiryForm({ machineTitle }: InquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setLoading(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, machineTitle }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setShowSuccess(true);

      reset({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('name')}
            placeholder="Your Name"
            className={inputClassName}
          />
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
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Your Message"
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
          {loading ? 'SENDING...' : 'SEND INQUIRY'}
        </button>

        <p className="text-center font-inter text-xs text-steel">
          We typically respond within 1 business day
        </p>
      </form>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        machineTitle={machineTitle}
      />
    </>
  );
}