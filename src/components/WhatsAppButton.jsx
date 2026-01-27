export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525531983776"
      className="fixed bottom-6 right-6 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg z-50"
      aria-label="WhatsApp"
    >
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#25D366"
          d="M12 .5C5.4.5.5 5.4.5 12c0 2.1.6 4 1.8 5.7L.5 23.5l6.2-1.6c1.4.8 3 1.2 4.9 1.2 6.6 0 11.5-5 11.5-11.6S18.6.5 12 .5z"
        />
        <path
          fill="#fff"
          d="M17.7 14.1c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1s-.8 1-1 1.2-.4.2-.7.1a6.9 6.9 0 01-2-1.2 7.2 7.2 0 01-1.3-1.6c-.3-.6 0-.9.3-1.2.3-.2.5-.4.8-.8.3-.4.3-.6.5-1 .1-.3 0-.5-.2-.6s-.7-.5-1-.8c-.4-.3-.8-.7-1.1-1.1s-.3-.6 0-1c.4-.4.8-1 1.2-1.3 1-.7 2.4-.6 3 .1.5.7 1.5 1.2 2.1 1.6.6.4 1.1.9 1.5 1.4.4.6.4.9.2 1.4-.1.3-.3.6-.6.8-.3.2-.6.4-.9.4z"
        />
      </svg>
    </a>
  );
}
