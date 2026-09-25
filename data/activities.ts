export interface Activity {
  id: string;
  title: string;
  description: string;
  category: "Cultural Activities" | "Community Gatherings" | "Club Events" | "Celebrations" | "Social Activities";
  image?: string;
}

export const activities: Activity[] = [
  // Sample structure for activities
];
