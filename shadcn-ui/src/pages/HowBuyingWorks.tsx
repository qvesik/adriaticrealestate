import { Search, FileCheck, FileSignature, CreditCard, Home } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step = ({ number, icon, title, description }: StepProps) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex items-center justify-center mb-6 relative">
      <div className="text-white">{icon}</div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#C9A961] rounded-full flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-[#1E3A5F]">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function HowBuyingWorks() {
  const steps = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Choose a Property",
      description: "Browse our selection of apartments and select the one that fits your needs and budget.",
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Legal Check",
      description: "Our legal team conducts thorough verification of property documents and ownership status.",
    },
    {
      icon: <FileSignature className="w-10 h-10" />,
      title: "Contract Signing",
      description: "Sign the purchase agreement with full legal support and clear terms in your language.",
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Payment",
      description: "Complete the payment process through secure channels with transparent transaction records.",
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Ownership Registration",
      description: "We handle all paperwork to register your property ownership with Albanian authorities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1E3A5F] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">How Buying Works</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A simple, transparent process from property selection to ownership registration
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {steps.slice(0, 3).map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {steps.slice(3).map((step, index) => (
              <Step
                key={index + 3}
                number={index + 4}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1E3A5F]">Ready to Start?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today and we'll guide you through every step of the process
          </p>
          <a
            href="/"
            className="inline-block bg-[#1E3A5F] hover:bg-[#152B47] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}