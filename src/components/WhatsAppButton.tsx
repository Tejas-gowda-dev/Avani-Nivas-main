
import React from 'react';
import { COMPANY_INFO } from '../data/company';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage = 'Hello Gowdru Realcom / Avani Nivas team, I would like to enquire about a construction or interior project.'
}) => {

  const metaEnv = (import.meta as unknown as {
    env?: Record<string, string>
  }).env;

  const rawNumber =
    (metaEnv &&
      (metaEnv.VITE_WHATSAPP_NUMBER ||
        metaEnv.NEXT_PUBLIC_WHATSAPP_NUMBER)) ||
    COMPANY_INFO.contacts.whatsappNumber;

  const sanitizedNumber = rawNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(customMessage);

  const whatsappUrl = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gowdru Realcom on WhatsApp"
        title="Chat on WhatsApp"
        className="
          relative flex items-center justify-center
          w-[60px] h-[60px]
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_4px_15px_rgba(0,0,0,0.25)]
          hover:bg-[#20BD5A]
          hover:scale-110
          active:scale-95
          transition-all duration-300
          focus-visible:outline-none
          focus-visible:ring-4
          focus-visible:ring-[#25D366]/40
        "
      >

        {/* WhatsApp pulse animation */}
        <span className="
          absolute inset-0
          rounded-full
          bg-[#25D366]
          animate-ping
          opacity-20
          pointer-events-none
        " />

        {/* Official-style WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative z-10 w-[36px] h-[36px] fill-current"
          aria-hidden="true"
        >
          <path d="M16.01 3.2C9.02 3.2 3.34 8.88 3.34 15.87c0 2.23.59 4.4 1.7 6.32L3.2 28.8l6.76-1.77a12.6 12.6 0 0 0 6.05 1.54h.01c6.98 0 12.66-5.68 12.66-12.67 0-3.38-1.31-6.55-3.7-8.94a12.58 12.58 0 0 0-8.97-3.76Zm0 23.23h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-4.01 1.05 1.07-3.91-.25-.4a10.48 10.48 0 0 1-1.61-5.61c0-5.82 4.73-10.55 10.56-10.55 2.82 0 5.47 1.1 7.46 3.09a10.49 10.49 0 0 1 3.08 7.47c0 5.82-4.74 10.55-10.56 10.55Zm5.79-7.9c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.79.76.33 1.36.52 1.82.67.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>

      </a>
    </aside>
  );
};
