// Sample data for the church management dashboard.
// Replace with real API/database calls when connecting a backend.

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  joined: string;
  status: "Active" | "New" | "Inactive";
  group: string;
  location: { city: string; lat: number; lng: number };
}

export interface GivingRecord {
  id: string;
  member: string;
  amount: number;
  category: string;
  date: string;
  method: string;
}

export interface Visitor {
  id: string;
  name: string;
  date: string;
  invitedBy: string;
  followUp: "Pending" | "Contacted" | "Joined";
}

export const members: Member[] = [
  { id: "IAG-001", name: "John Smith", email: "john.smith@email.com", phone: "072 123 4567", joined: "2018-03-12", status: "Active", group: "Worship Team", location: { city: "Johannesburg", lat: -26.2041, lng: 28.0473 } },
  { id: "IAG-002", name: "Mary Johnson", email: "mary.j@email.com", phone: "083 234 5678", joined: "2019-07-22", status: "Active", group: "Prayer Team", location: { city: "Pretoria", lat: -25.7479, lng: 28.2293 } },
  { id: "IAG-003", name: "David Williams", email: "d.williams@email.com", phone: "071 345 6789", joined: "2020-01-15", status: "Active", group: "Youth Ministry", location: { city: "Soweto", lat: -26.2678, lng: 27.8585 } },
  { id: "IAG-004", name: "Sarah Brown", email: "sarah.b@email.com", phone: "082 456 7890", joined: "2021-09-08", status: "Active", group: "Outreach", location: { city: "Sandton", lat: -26.1076, lng: 28.0567 } },
  { id: "IAG-005", name: "James Wilson", email: "j.wilson@email.com", phone: "074 567 8901", joined: "2022-05-30", status: "Active", group: "Small Groups", location: { city: "Midrand", lat: -25.9992, lng: 28.1263 } },
  { id: "IAG-006", name: "Grace Mokoena", email: "grace.m@email.com", phone: "073 678 9012", joined: "2023-02-14", status: "New", group: "Worship Team", location: { city: "Kempton Park", lat: -26.1006, lng: 28.2294 } },
  { id: "IAG-007", name: "Peter Ndlovu", email: "peter.n@email.com", phone: "081 789 0123", joined: "2023-11-03", status: "New", group: "Youth Ministry", location: { city: "Roodepoort", lat: -26.1625, lng: 27.8725 } },
  { id: "IAG-008", name: "Linda Van Wyk", email: "linda.vw@email.com", phone: "084 890 1234", joined: "2020-06-18", status: "Active", group: "Prayer Team", location: { city: "Centurion", lat: -25.8603, lng: 28.1894 } },
  { id: "IAG-009", name: "Thabo Dlamini", email: "thabo.d@email.com", phone: "076 901 2345", joined: "2019-04-25", status: "Inactive", group: "Outreach", location: { city: "Benoni", lat: -26.1885, lng: 28.3208 } },
  { id: "IAG-010", name: "Emily Carter", email: "emily.c@email.com", phone: "079 012 3456", joined: "2024-01-20", status: "New", group: "Small Groups", location: { city: "Randburg", lat: -26.0936, lng: 28.0064 } },
  { id: "IAG-011", name: "Sipho Khumalo", email: "sipho.k@email.com", phone: "072 111 2222", joined: "2021-03-11", status: "Active", group: "Worship Team", location: { city: "Alberton", lat: -26.2672, lng: 28.1220 } },
  { id: "IAG-012", name: "Rachel Adams", email: "rachel.a@email.com", phone: "083 333 4444", joined: "2022-08-19", status: "Active", group: "Youth Ministry", location: { city: "Boksburg", lat: -26.2120, lng: 28.2624 } },
];

// Attendance over the last 12 weeks
export const attendanceTrend = [
  { week: "W1", attendance: 182, online: 45 },
  { week: "W2", attendance: 195, online: 52 },
  { week: "W3", attendance: 188, online: 48 },
  { week: "W4", attendance: 210, online: 61 },
  { week: "W5", attendance: 205, online: 58 },
  { week: "W6", attendance: 224, online: 67 },
  { week: "W7", attendance: 218, online: 63 },
  { week: "W8", attendance: 236, online: 72 },
  { week: "W9", attendance: 241, online: 78 },
  { week: "W10", attendance: 229, online: 70 },
  { week: "W11", attendance: 252, online: 84 },
  { week: "W12", attendance: 268, online: 91 },
];

// Membership growth over the year
export const growthTrend = [
  { month: "Jan", members: 210 },
  { month: "Feb", members: 218 },
  { month: "Mar", members: 227 },
  { month: "Apr", members: 235 },
  { month: "May", members: 248 },
  { month: "Jun", members: 259 },
  { month: "Jul", members: 271 },
  { month: "Aug", members: 284 },
  { month: "Sep", members: 296 },
  { month: "Oct", members: 312 },
  { month: "Nov", members: 328 },
  { month: "Dec", members: 341 },
];

// Giving over the last 12 months (in Rand)
export const givingTrend = [
  { month: "Jan", tithes: 42000, offerings: 18000, missions: 8000 },
  { month: "Feb", tithes: 45000, offerings: 19500, missions: 7500 },
  { month: "Mar", tithes: 48000, offerings: 21000, missions: 9000 },
  { month: "Apr", tithes: 44000, offerings: 20000, missions: 8500 },
  { month: "May", tithes: 51000, offerings: 23000, missions: 10000 },
  { month: "Jun", tithes: 53000, offerings: 24500, missions: 11000 },
  { month: "Jul", tithes: 49000, offerings: 22000, missions: 9500 },
  { month: "Aug", tithes: 56000, offerings: 26000, missions: 12000 },
  { month: "Sep", tithes: 58000, offerings: 27500, missions: 13000 },
  { month: "Oct", tithes: 61000, offerings: 29000, missions: 14000 },
  { month: "Nov", tithes: 64000, offerings: 30500, missions: 15000 },
  { month: "Dec", tithes: 72000, offerings: 35000, missions: 18000 },
];

export const givingByCategory = [
  { name: "Tithes", value: 643000 },
  { name: "Offerings", value: 296000 },
  { name: "Missions", value: 135000 },
  { name: "Building Fund", value: 89000 },
];

export const recentGiving: GivingRecord[] = [
  { id: "G-1001", member: "John Smith", amount: 2500, category: "Tithes", date: "2026-07-05", method: "EFT" },
  { id: "G-1002", member: "Mary Johnson", amount: 800, category: "Offering", date: "2026-07-05", method: "Card" },
  { id: "G-1003", member: "David Williams", amount: 1200, category: "Missions", date: "2026-07-05", method: "Cash" },
  { id: "G-1004", member: "Sarah Brown", amount: 500, category: "Offering", date: "2026-07-04", method: "WhatsApp Pay" },
  { id: "G-1005", member: "James Wilson", amount: 3000, category: "Building Fund", date: "2026-07-03", method: "EFT" },
  { id: "G-1006", member: "Linda Van Wyk", amount: 1500, category: "Tithes", date: "2026-07-02", method: "Card" },
];

export const visitors: Visitor[] = [
  { id: "V-201", name: "Michael Roberts", date: "2026-07-05", invitedBy: "John Smith", followUp: "Pending" },
  { id: "V-202", name: "Nomsa Zulu", date: "2026-07-05", invitedBy: "Grace Mokoena", followUp: "Contacted" },
  { id: "V-203", name: "Daniel Pieterse", date: "2026-06-28", invitedBy: "Website", followUp: "Joined" },
  { id: "V-204", name: "Aisha Patel", date: "2026-06-28", invitedBy: "Sarah Brown", followUp: "Contacted" },
  { id: "V-205", name: "Kevin Botha", date: "2026-06-21", invitedBy: "Social Media", followUp: "Pending" },
];

export const upcomingEvents = [
  { id: "E-1", title: "Sunday Worship Service", date: "2026-07-12", time: "10:00 AM", attendees: 268, capacity: 350 },
  { id: "E-2", title: "Wednesday Bible Study", date: "2026-07-15", time: "7:00 PM", attendees: 84, capacity: 120 },
  { id: "E-3", title: "Youth Night", date: "2026-07-17", time: "6:00 PM", attendees: 56, capacity: 80 },
  { id: "E-4", title: "Prayer & Fasting Week", date: "2026-07-20", time: "6:00 AM", attendees: 142, capacity: 350 },
];
