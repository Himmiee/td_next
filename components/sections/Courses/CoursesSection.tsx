import { CourseSection } from "./CourseComponent";
import { CourseDetails } from "./CourseDetails";
import { CourseFaqs } from "./CourseFaqs";

export const CourseComponent = () => {
  return (
    <section className="">
      <CourseSection />
      <CourseDetails />
      <CourseFaqs />
    </section>
  );
};
