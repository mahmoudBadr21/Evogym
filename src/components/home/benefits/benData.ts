// Define a type for a single benefit item
type Benefit = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

// Define the benefits data as an array of Benefit items
export const benefitsData: Benefit[] = [
  {
    id: 1,
    icon: "fas fa-home",
    title: "State of the Art Facilities",
    description: "Neque adipiscing ament enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    id: 2,
    icon: "fas fa-users",
    title: "100's of Diverse Classes",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    id: 3,
    icon: "fas fa-shekel",
    title: "Expert and Pro Trainers",
    description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];
