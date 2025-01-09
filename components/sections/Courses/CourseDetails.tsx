import Link from "next/link";

export const CourseDetails = () => {
  return (
    <section className="bg-white ">
      <div className="w-full  3xl:max-w-screen-3xl mx-auto px-4 xl:p-8 py-12 space-y-4">
        <div className="w-full flex justify-between">
          <div className="text-2xl text-[#262626] font-medium">
            Course Overview
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeTvW9BzMHQO4qdR7oOqHGc0aDlp2_UneAkxitcuLLi6XgX5w/viewform">
            {" "}
            <div className="bg-YellowBtnColor p-3 rounded-lg px-4 text-black">
              Enrol
            </div>
          </Link>
        </div>
        <div className="space-y-5 leading-[1.8]">
          <p>Welcome to Tech Dive Product Management Program</p>
          <div className="my-4">
            Tech Dive is a premier training institute dedicated to equipping
            individuals and corporate organizations with the knowledge, skills,
            tools, and experience required to excel as Product Managers.
          </div>
          <div className="my-4">
            At Tech Dive, we are committed to grooming talents who can lead the
            development and delivery of impactful products from Africa to the
            world. Every single day, our mission is to nurture and empower
            product managers who bring innovative solutions to life.
          </div>
          <div className="my-4">
            This brochure outlines the comprehensive syllabus of the Tech Dive
            Product Management Program. It is meticulously designed for:
          </div>
          <div className="gap-y-4">
            {[
              "Newbies starting their journey in product management.",
              "Accidental Product Managers seeking to structure and refine their existing experience.",
            ].map((point, index) => (
              <ul key={index} className="list-disc list-inside text-gray-700">
                <li>{point}</li>
              </ul>
            ))}
          </div>
          <p>
            The program will arm you with the essential knowledge, tools, and
            skills to confidently step into the role of a Product Manager.
            Conducted online, the course is open to anyone, regardless of
            background or prior experience.
          </p>
          <div className="my-4">What to Expect:</div>
          <div className="my-4">
            By the end of the program, you will create a professional portfolio
            showcasing your skills and achievements. Additionally, outstanding
            students will have the opportunity to participate in an Open-Source
            Internship Program, collaborating with UI/UX designers and software
            developers to build a live product. This hands-on experience will
            allow you to gain real-world expertise and further enrich your
            portfolio.
          </div>
          <div className="my-4">
            The program runs for 10 weeks and includes the following:
          </div>
        </div>
      </div>
    </section>
  );
};
