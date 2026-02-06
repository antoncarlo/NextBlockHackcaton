const benefits = [
  "Permissionless",
  "Open-Source",
  "On-Chain",
  "Transparent",
  "Immutable",
  "Composable",
];

const partners = [
  {
    name: "Base",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Ethereum",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 10L10 13L17 10L10 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 13L3 10L10 18L17 10L10 13Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Chainlink",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L17 6V14L10 18L3 14V6L10 2Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const KeyBenefitsSection = () => {
  // Alternate between keywords and partners
  const scrollItems: Array<{ type: 'keyword'; value: string } | { type: 'partner'; name: string; icon: JSX.Element }> = [];
  const maxLength = Math.max(benefits.length, partners.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < benefits.length) {
      scrollItems.push({ type: 'keyword', value: benefits[i] });
    }
    if (i < partners.length) {
      scrollItems.push({ type: 'partner', ...partners[i] });
    }
  }

  return (
    <section className="py-12 border-y border-[rgba(255,255,255,0.06)] bg-[#0D1221] overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...scrollItems, ...scrollItems].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 py-4"
            >
              {item.type === 'keyword' ? (
                <span className="text-2xl font-medium text-[rgba(74,108,247,0.5)] hover:text-[rgba(74,108,247,0.8)] transition-colors whitespace-nowrap tracking-wide">
                  {item.value}
                </span>
              ) : (
                <span className="flex items-center gap-2 text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,255,255,0.7)] transition-colors whitespace-nowrap">
                  {item.icon}
                  <span className="text-base font-medium tracking-wide">
                    {item.name}
                  </span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
