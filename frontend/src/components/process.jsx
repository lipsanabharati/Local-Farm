

export default function OurProcess() {
  const steps = [
    {
      number: 1,
      title: "Step One",
      description: "We source natural ingredients from trusted local farmers.",
    },
    {
      number: 2,
      title: "Step Two",
      description: "Ingredients are cleaned and processed to retain quality.",
    },
    {
      number: 3,
      title: "Step Three",
      description: "Products are packaged fresh and delivered to customers.",
    },
  ];

  return (
    <div className="w-full p-5 md:p-10">
      <div className="md:flex hidden relative flex justify-between items-start max-w-5xl mx-auto w-full">
        {/* Horizontal connecting line */}
        <div className="absolute top-12 left-[10%] w-[80%] h-[2px] bg-[#609647]/50 z-0"></div>

        {steps.map((step, idx) => (
          <div key={step.number} className="relative z-10 flex flex-col items-center text-center w-1/5">
            {/* Circle with number */}
            <div className="w-20 h-20 rounded-full border-2 border-[#609647] flex items-center justify-center text-[#93C553] font-bold text-2xl mb-4 bg-[#F2F6E8] ">
              {step.number}
            </div>

            {/* Step description */}
            <p className="text-sm font-bold text-black">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="md:hidden block relative flex flex-col justify-between items-start max-w-5xl mx-auto px-8">
        {/* vertical connecting line */}
        <div className="absolute top-[10%] left-[14%] h-[76%] w-[2px] bg-[#609647]/50 z-0"></div>

        {steps.map((step, idx) => (
          <div key={step.number} className="relative z-10 flex flex-row text-center w-full gap-6 items-center">
            {/* Circle with number */}
            <div className="w-[20%] h-[30%] rounded-full border-2 border-[#609647] flex items-center justify-center text-[#93C553] font-bold text-3xl mb-4 bg-[#F2F6E8] ">
              {step.number}
            </div>

            {/* Step description */}
            <p className="text-sm font-bold text-black">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      </div>
  );
}