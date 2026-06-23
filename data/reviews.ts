export type Review = {
  /** Unique id — any string */
  id: string;
  /** Customer name */
  name: string;
  /** Optional location, e.g. "Mumbai" */
  location?: string;
  /** Rating 1-5 */
  rating: number;
  /** The review text */
  text: string;
  /** ISO date string, e.g. "2025-03-14" */
  date: string;
};

/**
 * Add reviews here. After editing, commit and push.
 */
export const reviews: Review[] = [
  // Example — delete and replace with real reviews
  // {
  //   id: 'r-001',
  //   name: 'Priya S.',
  //   location: 'Mumbai',
  //   rating: 5,
  //   text: 'The craftsmanship is unmatched. My tote gets compliments daily.',
  //   date: '2025-03-14',
  // },
];
