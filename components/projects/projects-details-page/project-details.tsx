"use client";

import { useState } from "react";

const services = [
  { id: "refurbishment", label: "Refurbishment" },
  { id: "conversion", label: "Conversion" },
  { id: "extension", label: "Extension" },
  { id: "design", label: "Design" },
];

export default function ProjectDetails() {
  const [activeService, setActiveService] = useState("refurbishment");

  return (
    <div className="flex min-h-screen bg-white auto-container lg:space-x-40 space-x-0">
      {/* Sidebar */}
      <nav className="w-64  p-6 lg:space-y-20 space-y-0 lg:flex lg:flex-col hidden ">
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeService === service.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeService === service.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {services.map((service) => (
            <li key={service.id}>
              <button
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeService === service.id
                    ? " border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {service.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        <div className="space-y-12">
          <section>
            <h1 className="text-4xl font-bold text-primary-80 mb-2">
              CLIENT NAME
            </h1>
            <p className="text-gray-600">Faringdon: Complete Refurbishment</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-80 mb-4">
              LOCATION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Delivering within budget and time, at a high level of quality and
              offering services at a fair and competitive price to our clients,
              ensures we remain competitive. We maintain a high level of
              professionalism, ensuring at all times integrity, honesty and
              fairness in our relationship with our suppliers, subcontractors,
              professional associates and clients, remains our first priority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-80 mb-4">
              PROJECT BRIEF
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We will consistently place a premium on established relationships
              and commit ourselves daily to our offered promise of integrity and
              professionalism in all we do. In addition, our commitment to every
              client includes providing a continued guarantee as well as
              effectively applying time management, quality management and cost
              management principles and strategies on all engagements. Most
              important, we take pride in our efforts to offer and provide equal
              opportunities across our organisation, as this forms an integral
              part of our value system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-80 mb-4">
              OUR DELIVERY
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                We are accredited members of the following bodies. Consequently,
                our work is continually vetted and regularly checked to be of a
                high standard.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With 20 years experience across our management team, Pearl
                Projects and Development offers and provides exceptional,
                personalised and professional services to its client. We place a
                premium on the relationships we form and grow with our clients
                and service partners. Our placing a premium on our interaction
                with clients and service partnerships us build mutual trust
                across all parties, enabling our projects run smoothly and with
                minimal deviations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Given the combination of our architectural and project
                management expertise and experience, we deliver bespoke services
                that are tailored directly towards our clients needs. To achieve
                this, we have directed our energies towards delivering
                residential and commercial developments and works, providing
                outstanding quality and standards.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
