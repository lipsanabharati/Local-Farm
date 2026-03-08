"use client";

export default function OurProcess() {
  const steps = [
    {
      number: 1,
      title: "Step One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      number: 2,
      title: "Step Two",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      number: 3,
      title: "Step Three",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
  ];

  return (
    <div className="w-full">
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
        <div className="absolute top-12 left-[18%] h-[76%] w-[2px] bg-[#609647]/50 z-0"></div>

        {steps.map((step, idx) => (
          <div key={step.number} className="relative z-10 flex flex-row text-center w-ful gap-6 items-center">
            {/* Circle with number */}
            <div className="w-38 h-20 rounded-full border-2 border-[#609647] flex items-center justify-center text-[#93C553] font-bold text-3xl mb-4 bg-[#F2F6E8] ">
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