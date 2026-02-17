import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// get age from birth date
export function getAge(birthDate: string) {
  let birthYear = Number(birthDate.split('-')[0]);
  let getAge = new Date().getFullYear() - birthYear;
  return getAge;
}
