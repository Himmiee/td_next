// "use client";

// import { useState } from "react";

// const services = [
//   { id: "refurbishment", label: "Refurbishment" },
//   { id: "conversion", label: "Conversion" },
//   { id: "extension", label: "Extension" },
//   { id: "design", label: "Design" },
// ];

// export default function ProjectDetails() {
//   const [activeService, setActiveService] = useState("refurbishment");

//   return (
//     <div className="flex min-h-screen bg-white auto-container lg:space-x-40 space-x-0">
//       {/* Sidebar */}
//       <nav className="w-64  p-6 lg:space-y-20 space-y-0 lg:flex lg:flex-col hidden ">
//         <ul className="space-y-2">
//           {services.map((service) => (
//             <li key={service.id}>
//               <button
//                 onClick={() => setActiveService(service.id)}
//                 className={`w-full text-left px-4 py-2  transition-colors ${
//                   activeService === service.id
//                     ? "border-l-2 border-primary-100 text-primary-100 font-medium"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 {service.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <ul className="space-y-2">
//           {services.map((service) => (
//             <li key={service.id}>
//               <button
//                 onClick={() => setActiveService(service.id)}
//                 className={`w-full text-left px-4 py-2  transition-colors ${
//                   activeService === service.id
//                     ? "border-l-2 border-primary-100 text-primary-100 font-medium"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 {service.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <ul className="space-y-2">
//           {services.map((service) => (
//             <li key={service.id}>
//               <button
//                 onClick={() => setActiveService(service.id)}
//                 className={`w-full text-left px-4 py-2  transition-colors ${
//                   activeService === service.id
//                     ? " border-l-2 border-primary-100 text-primary-100 font-medium"
//                     : "text-gray-600 hover:bg-gray-50"
//                 }`}
//               >
//                 {service.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 p-8 max-w-4xl">
//         <div className="space-y-12">
//           <section>
//             <h1 className="text-4xl font-bold text-primary-80 mb-2">
//               CLIENT NAME
//             </h1>
//             <p className="text-gray-600">Faringdon: Complete Refurbishment</p>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-primary-80 mb-4">
//               LOCATION
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Delivering within budget and time, at a high level of quality and
//               offering services at a fair and competitive price to our clients,
//               ensures we remain competitive. We maintain a high level of
//               professionalism, ensuring at all times integrity, honesty and
//               fairness in our relationship with our suppliers, subcontractors,
//               professional associates and clients, remains our first priority.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-primary-80 mb-4">
//               PROJECT BRIEF
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               We will consistently place a premium on established relationships
//               and commit ourselves daily to our offered promise of integrity and
//               professionalism in all we do. In addition, our commitment to every
//               client includes providing a continued guarantee as well as
//               effectively applying time management, quality management and cost
//               management principles and strategies on all engagements. Most
//               important, we take pride in our efforts to offer and provide equal
//               opportunities across our organisation, as this forms an integral
//               part of our value system.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-2xl font-semibold text-primary-80 mb-4">
//               OUR DELIVERY
//             </h2>
//             <div className="space-y-6">
//               <p className="text-gray-600 leading-relaxed">
//                 We are accredited members of the following bodies. Consequently,
//                 our work is continually vetted and regularly checked to be of a
//                 high standard.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 With 20 years experience across our management team, Pearl
//                 Projects and Development offers and provides exceptional,
//                 personalised and professional services to its client. We place a
//                 premium on the relationships we form and grow with our clients
//                 and service partners. Our placing a premium on our interaction
//                 with clients and service partnerships us build mutual trust
//                 across all parties, enabling our projects run smoothly and with
//                 minimal deviations.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Given the combination of our architectural and project
//                 management expertise and experience, we deliver bespoke services
//                 that are tailored directly towards our clients needs. To achieve
//                 this, we have directed our energies towards delivering
//                 residential and commercial developments and works, providing
//                 outstanding quality and standards.
//               </p>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

const menuItems = [
  { id: "about", label: "About" },
  { id: "vision", label: "Our Vision" },
  { id: "mission", label: "Our Mission" },
  { id: "values", label: "Our Values" },
  { id: "membership", label: "Membership" },
];

export default function AboutDetails() {
  const [activeItem, setActiveItem] = useState("about");

  return (
    <div className="flex min-h-screen bg-white auto-container lg:space-x-40 space-x-0 my-10">
      {/* Sidebar */}
      <nav className="w-64  p-6 lg:space-y-20 space-y-0 lg:flex lg:flex-col hidden text-xl">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeItem === item.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeItem === item.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full text-left px-4 py-2  transition-colors ${
                  activeItem === item.id
                    ? "border-l-2 border-primary-100 text-primary-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        <div className="space-y-12">
          <section>
            <h1 className="text-4xl font-semibold text-primary-80 mb-8">
              ABOUT OUR SERVICES
            </h1>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With several years of experience across our management team,
                Pearl Projects and Development offers and provides exceptional,
                personalised and professional services to its client. We place a
                premium on the relationships we form and grow with our clients
                and service partners. Our placing a premium on our interaction
                with clients and service partnerships helps us build mutual
                trust for all parties. This helps ensure our projects run
                smoothly and with minimal disruptions.
              </p>
              <p>
                Also, given the combination of our architectural and project
                management expertise and experience, we can deliver bespoke
                services that are tailored to our client&apos;s needs. We
                achieve this by directing our energies towards delivering
                residential and commercial property developments with the
                outstanding in quality and standard.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-80 mb-4">
              OUR VISION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Delivering projects that exceed client expectations and are
              incident-free.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-80 mb-4">
              OUR MISSION
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ensure that project completion is within budget and on time,
              producing quality delivery and the client is offered our services
              at a fair and competitive price.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-80 mb-4">
              OUR VALUE
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to delivering a robust service and offer the
              assurance of integrity and professionalism in all we do. To our
              clients, suppliers, professional colleagues and sub-contractors,
              we make the commitment to fairness and equity in our dealings. On
              every project, we will be effective by mindfully applying time
              management, quality management and cost management principles in
              all we do. Most importantly, we are proud of our effort to be an
              equal opportunities organisation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary-80 mb-4">
              MEMBERSHIP
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Pearl Projects & Development is an accredited member of the
              Federation of Master Builders, whilst members of our management
              team are members of the Chartered Institute of Building (CIOB) and
              Association for Project Management (APM).
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
