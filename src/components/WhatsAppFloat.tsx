import { MessageCircle } from 'lucide-react';

type Props = {
  phone: string;
  message?: string;
};

export default function WhatsAppFloat({ phone, message }: Props) {
  const text = message ? encodeURIComponent(message) : '';
  const href = `https://wa.me/${phone}${text ? `?text=${text}` : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        inline-flex items-center justify-center
        h-14 w-14 rounded-full
        bg-green-500 text-white
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110 hover:rotate-6 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-green-300
      "
    >
      <MessageCircle
        className="
          h-7 w-7
          transition-transform duration-300
        "
        aria-hidden="true"
      />
    </a>
  );
}
