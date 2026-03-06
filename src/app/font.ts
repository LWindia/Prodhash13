// src/app/font.ts
import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'], // or ['400', '500', '600', '700'] if you need multiple weights
  variable: '--font-poppins',
})