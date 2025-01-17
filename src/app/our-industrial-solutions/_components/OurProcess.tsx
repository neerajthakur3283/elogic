'use client'
import { useState } from "react";

const steps = [
  {
    title: "Requirement Capture",
    content: (
      <>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Free consultation to assess your operational challenges and goals.</li>
          <li>• Evaluation of equipment condition and energy efficiency.</li>
          <li>• On-site review to find the best monitoring spots and connectivity.</li>
          <li>• Customized solutions based on your existing setup.</li>
        </ul>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
          Get Started →
        </button>
      </>
    ),
  },
  { title: "Proof of Value", content: <>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Free consultation to assess your operational challenges and goals.</li>
          <li>• Evaluation of equipment condition and energy efficiency.</li>
          <li>• On-site review to find the best monitoring spots and connectivity.</li>
          <li>• Customized solutions based on your existing setup.</li>
        </ul>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
          Get Started →
        </button>
      </> },
  { title: "Commissioning", content: <>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Free consultation to assess your operational challenges and goals.</li>
          <li>• Evaluation of equipment condition and energy efficiency.</li>
          <li>• On-site review to find the best monitoring spots and connectivity.</li>
          <li>• Customized solutions based on your existing setup.</li>
        </ul>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
          Get Started →
        </button>
      </> },
  { title: "Analysis & Support", content: <>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Free consultation to assess your operational challenges and goals.</li>
          <li>• Evaluation of equipment condition and energy efficiency.</li>
          <li>• On-site review to find the best monitoring spots and connectivity.</li>
          <li>• Customized solutions based on your existing setup.</li>
        </ul>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
          Get Started →
        </button>
      </> },
];

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className="relative flex flex-col items-center">
              {/* Step Indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition ${
                  index <= activeStep ? "border-blue-500 bg-blue-500" : "border-gray-300 bg-gray-100"
                }`}
                onClick={() => setActiveStep(index)}
              >
                {index <= activeStep && <div className="w-3 h-3 bg-white rounded-full"></div>}
              </div>
              {index !== steps.length - 1 && (
                <div className={`w-px h-10 ${index < activeStep ? "bg-blue-500" : "bg-gray-300"}`}></div>
              )}
            </div>
            {/* Step Title */}
            <div className="ml-4 w-full">
              <button
                onClick={() => setActiveStep(index)}
                className="w-full text-left py-3 px-4 rounded-lg transition bg-gray-100 hover:bg-gray-200"
              >
                <span className="font-semibold">{step.title}</span>
              </button>
              {index === activeStep && step.content && (
                <div className="bg-gray-900 text-white p-4 mt-2 rounded-lg">
                  {step.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
