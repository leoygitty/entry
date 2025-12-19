"use client";

export default function MobileCallButton() {
  return (
    <a
      href="tel:2679452247"
      aria-label="Call Entry Solutions LLC"
      className="
        fixed bottom-5 right-5 z-50 md:hidden
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-red-600 text-white
        shadow-xl
        hover:bg-red-700 hover:scale-105
        active:scale-95
        transition-all duration-300
      "
    >
      <span className="text-xl">📞</span>
    </a>
  );
}
