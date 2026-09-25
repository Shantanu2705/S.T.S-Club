export interface CommitteeMember {
  name: string;
  role: string;
  category: "President" | "Vice President" | "General Secretary" | "Assistant Secretary" | "Treasurer" | "Cultural Secretary" | "Assistant Cultural Secretary" | "Game Secretary" | "Assistant Game Secretary" | "Member";
  image?: string;
}

export const committeeMembers: CommitteeMember[] = [
  { name: "Bappaditya Chakraborty", role: "President", category: "President" },
  { name: "Korak Bikash Mitra", role: "Vice President", category: "Vice President" },
  { name: "Rajesh Kumar Singh", role: "General Secretary", category: "General Secretary" },
  { name: "Gopal Saha", role: "Assistant Secretary", category: "Assistant Secretary" },
  { name: "Aniruddhya Dasgupta", role: "Assistant Secretary", category: "Assistant Secretary" },
  { name: "Dulal Chakraborty", role: "Assistant Secretary", category: "Assistant Secretary" },
  { name: "Mukul Bose", role: "Assistant Secretary", category: "Assistant Secretary" },
  { name: "Partha Pratim Bhattacharya", role: "Treasurer", category: "Treasurer" },
  { name: "Sudipto Saha", role: "Treasurer", category: "Treasurer" },
  { name: "Sushil Baidya", role: "Cultural Secretary", category: "Cultural Secretary" },
  { name: "Amit Mitra", role: "Assistant Cultural Secretary", category: "Assistant Cultural Secretary" },
  { name: "Anirban Chakraborty", role: "Assistant Cultural Secretary", category: "Assistant Cultural Secretary" },
  { name: "Ganesh Chakraborty", role: "Game Secretary", category: "Game Secretary" },
  { name: "Manik Barman", role: "Assistant Game Secretary", category: "Assistant Game Secretary" },
  { name: "Ranojit Ghosh", role: "Assistant Game Secretary", category: "Assistant Game Secretary" },
  { name: "Nitai Har", role: "Member", category: "Member" },
  { name: "Uttam Chowdhury", role: "Member", category: "Member" },
  { name: "Lokesh Sarkar", role: "Member", category: "Member" },
  { name: "Uttam Saha", role: "Member", category: "Member" },
  { name: "Subir Chowdhury", role: "Member", category: "Member" },
  { name: "Arup Saha", role: "Member", category: "Member" },
];
