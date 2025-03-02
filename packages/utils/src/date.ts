/**
 * Date utility functions
 * @packageDocumentation
 */

/**
 * Format a date with the specified format
 * @param date - The date to format
 * @param format - The format to use (default: 'YYYY-MM-DD')
 * @returns Formatted date string
 */
export function formatDate(date: Date, format = 'YYYY-MM-DD'): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Get the difference between two dates in days
 * @param date1 - The first date
 * @param date2 - The second date (default: current date)
 * @returns Number of days between the dates
 */
export function getDaysDifference(date1: Date, date2 = new Date()): number {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Check if a date is in the past
 * @param date - The date to check
 * @returns Whether the date is in the past
 */
export function isPastDate(date: Date): boolean {
  return date.getTime() < new Date().getTime();
}

/**
 * Add days to a date
 * @param date - The base date
 * @param days - Number of days to add
 * @returns New date with days added
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Get a relative time string (e.g., "2 days ago", "in 3 hours")
 * @param date - The date to format relative to now
 * @returns Relative time string
 */
export function getRelativeTimeString(date: Date): string {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHr = Math.round(diffMin / 60);
  const diffDays = Math.round(diffHr / 24);

  if (diffSec < 0) {
    // In the past
    if (diffSec > -60) return `${Math.abs(diffSec)} seconds ago`;
    if (diffMin > -60) return `${Math.abs(diffMin)} minutes ago`;
    if (diffHr > -24) return `${Math.abs(diffHr)} hours ago`;
    if (diffDays > -30) return `${Math.abs(diffDays)} days ago`;
    
    const diffMonths = Math.round(diffDays / 30);
    if (diffMonths > -12) return `${Math.abs(diffMonths)} months ago`;
    
    return `${Math.abs(Math.round(diffMonths / 12))} years ago`;
  } else {
    // In the future
    if (diffSec < 60) return `in ${diffSec} seconds`;
    if (diffMin < 60) return `in ${diffMin} minutes`;
    if (diffHr < 24) return `in ${diffHr} hours`;
    if (diffDays < 30) return `in ${diffDays} days`;
    
    const diffMonths = Math.round(diffDays / 30);
    if (diffMonths < 12) return `in ${diffMonths} months`;
    
    return `in ${Math.round(diffMonths / 12)} years`;
  }
} 