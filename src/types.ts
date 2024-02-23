export interface ProjectProps {
  projectID: number;
  title: string;
  description: string;
  image: string;
  techs: string[];
  repoURL: string;
  demoURL: string;
  date: string;
  desktop?: boolean;
  mobile?: boolean;
}

export interface ExperienceProps {
  title: string;
  description: string;
  current?: boolean;
  dateStart?: string;
  dateEnd?: string;
  moreURL?: string;
}

export interface LinkProps {
  title: string;
  url: string;
  label: string;
  icon: JSX.Element;
  disabled?: boolean;
}
