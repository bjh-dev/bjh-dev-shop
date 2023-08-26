import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateHtmlId(inputString: string): string {
  // Remove non-alphanumeric characters and replace spaces with hyphens
  const sanitizedString = inputString
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()

  // Remove consecutive hyphens
  return sanitizedString.replace(/-{2,}/g, '-')
}
