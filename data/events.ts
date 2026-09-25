export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: "Cultural" | "Community" | "Meeting";
  status: "Upcoming" | "Ongoing" | "Completed";
  image?: string;
}

export const events: Event[] = [
  // Sample structure for future events
];
