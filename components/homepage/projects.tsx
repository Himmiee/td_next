// pages/projects.tsx

import Image from "next/image";

const projects = [
  {
    title: "Farringdon",
    description: "Complete Refurbishment  Interior Design",
    image: "/path-to-farringdon-image.jpg", // Replace with your image path
  },
  {
    title: "Finsbury Park",
    description: "Garage Conversion  Interior Design",
    image: "/path-to-finsbury-park-image.jpg", // Replace with your image path
  },
];

const Projects = () => {
  return (
    <section className=" my-14">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <div className=" w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-600 mt-8">
            With every project, we explore the introduction of a healthy mix of
            soft and hard landscaping. We believe this is essential for the
            delivery of a well-designed and delivered space that fosters
            positive mental health and wellbeing.
          </p>
        </div>
        <button
          type="button"
          className="bg-primary-100 hover:opacity-90 transform transition duration-200 hover:shadow-md flex items-center justify-center gap-1.5 font-poppins w-[199px] h-[59px] text-white -tracking-[3%] font-bold"
        >
          All Projects
        </button>
      </div>

      {/* Projects Cards */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-96 rounded-lg overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-between px-6">
              {/* Left: Title */}
              <div className="text-white text-2xl font-semibold">
                {project.title}
              </div>

              {/* Center: Icon */}
              <div className="text-white text-xl">
                <span className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                  →
                </span>
              </div>

              {/* Right: Description */}
              <div className="text-white text-right">
                <p className="font-medium">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
