export default function EfficiencyInsightCard() {
  return (
    <section className="py-16 px-4">
      <div
        className="
          max-w-4xl mx-auto
          bg-white/90 backdrop-blur-md
          rounded-2xl
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          p-6 sm:p-10
        "
      >
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
            Installed for Efficiency, Comfort, and Long-Term Performance
          </h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl">
            A door’s performance depends just as much on how it’s installed as the door itself.
          </p>
        </div>

        {/* Main explanation */}
        <div className="space-y-5 text-gray-700 text-[15px] leading-relaxed">
          <p>
            Poorly sealed or misaligned doors can allow conditioned air to escape,
            forcing your heating and cooling system to work harder to maintain a
            comfortable indoor temperature.
          </p>

          <p>
            When a door is installed correctly — with proper alignment, insulation,
            and sealing — your home holds temperature more consistently. That helps
            reduce unnecessary HVAC strain and improves overall energy efficiency
            over time.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />

        {/* Long-term value */}
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <p className="font-medium text-gray-900 mb-1">
              Reduced Air Loss
            </p>
            <p>
              Tight sealing minimizes drafts and temperature fluctuations near entryways.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900 mb-1">
              Less HVAC Strain
            </p>
            <p>
              Efficient installations help your system cycle more normally instead of overworking.
            </p>
          </div>

          <div>
            <p className="font-medium text-gray-900 mb-1">
              Long-Term Cost Control
            </p>
            <p>
              Improved efficiency can contribute to steadier energy usage and reduced wear over time.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <p className="mt-8 text-sm font-medium text-gray-900">
          Entry Solutions installs doors with performance in mind — so your home remains
          comfortable, efficient, and well-protected long after installation day.
        </p>
      </div>
    </section>
  );
}
