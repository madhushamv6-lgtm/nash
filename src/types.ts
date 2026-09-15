export interface TravelLogEntry {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM AM/PM
  destination: 'College' | 'Work' | 'Gym' | string;
}

export interface DestinationStats {
  name: string;
  value: number;
  color: string;
}
