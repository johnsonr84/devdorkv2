interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  jobIndex: "number";
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Education extends SanityBody {
  _type: "school";
  school: string;
  schoolIndex: "number";
  degreeImage: Image;
  dateStarted: date;
  dateEnded: date;
  degreeTitle: string;
  points: string[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  projectIndex: "number";
  image: Image;
  linkToBuild: string;
  linkToGithub: string;
  linkToDeployment: string;
  linkToDemo: string;
  summary: string;
  technologies: Technology[];
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
