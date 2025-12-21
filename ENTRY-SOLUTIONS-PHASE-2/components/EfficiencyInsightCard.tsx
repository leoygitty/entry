export default function EfficiencyInsightCard() {
  return (
    <section className="mt-10 px-4">
      <div
        className="
          max-w-3xl mx-auto
          bg-white/90 backdrop-blur-md
          rounded-2xl
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          p-6 sm:p-8
        "
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-[20px] font-semibold tracking-tight text-gray-900">
            A Properly Installed Door Can Lower Energy Loss
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Installation quality matters just as much as the door itself.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-[15px] leading-relaxed text-gray-700">
          <p>
            Many homes lose conditioned air through doors that aren’t sealed or
            aligned correctly. Even small gaps can force your HVAC system to run
            longer and work harder to maintain temperature.
          </p>

          <p>
            When a door is installed correctly — sealed, aligned, and insulated —
            your home holds temperature more efficiently. That reduced strain can
            help improve comfort and lower ongoing energy costs over time.
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gray-200" />

        {/* Value Statement */}
        <p className="text-sm font-medium text-gray-900">
          Entry Solutions focuses on proper installation — so your door performs
          efficiently long after installation day.
        </p>
      </div>
    </section>
  );
}
