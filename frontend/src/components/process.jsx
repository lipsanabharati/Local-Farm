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
    
      <div className="relative flex justify-between items-start max-w-5xl mx-auto">
        {/* Horizontal connecting line */}
        <div className="absolute top-12 left-38 w-[80%] h-[2px] bg-[#609647]/50 z-0"></div>

        {steps.map((step, idx) => (
          <div key={step.number} className="relative z-10 flex flex-col items-center text-center w-1/5">
            {/* Circle with number */}
            <div className="w-25 h-25 rounded-full border-2 border-[#609647] flex items-center justify-center text-[#93C553] font-bold text-5xl mb-4 bg-[#F2F6E8] ">
              {step.number}
            </div>

            {/* Step description */}
            <p className="text-sm font-bold text-black">
              {step.description}
            </p>
          </div>
        ))}
      </div>
  );
}