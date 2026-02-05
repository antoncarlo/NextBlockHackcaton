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
    <section className="py-12 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {[...benefits, ...benefits].map((benefit, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-12 py-4"
            >
              <span className="text-2xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors whitespace-nowrap">
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
