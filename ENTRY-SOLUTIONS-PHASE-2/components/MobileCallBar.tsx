"use client";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <a
        href="tel:2679452247"
        aria-label="Call Entry Solutions LLC"
        className="
          flex items-center justify-center gap-3
          py-4 px-6
          bg-gradient-to-r from-red-600 to-blue-700
          text-white font-bold text-lg
          shadow-2xl
          animate-pulse
          active:scale-[0.98]
          transition
        "
      >
        📞 Call Now — (267) 945-2247
      </a>
    </div>
  );
}
