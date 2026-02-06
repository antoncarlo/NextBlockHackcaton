const benefits = [
  "Permissionless",
  "Open-Source",
  "On-Chain",
  "Transparent",
  "Immutable",
  "Composable",
];

const KeyBenefitsSection = () => {
  return (
    <section className="py-12 border-y border-[rgba(255,255,255,0.06)] bg-[#0D1221] overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...benefits, ...benefits].map((benefit, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 py-4"
            >
              <span className="text-2xl font-medium text-[rgba(74,108,247,0.5)] hover:text-[rgba(74,108,247,0.8)] transition-colors whitespace-nowrap tracking-wide">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
