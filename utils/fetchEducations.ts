import { Education } from "../typings";

export const fetchEducations = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
  );

  const data = await res.json();
  const educations: Education[] = data.educations;

  // console.log("fetching", education);

  return educations;
};