import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/header' // client component
import './globals.css'
import { dark } from '@clerk/themes'



export const metadata = {
  title: 'My App',
  description: 'Using Clerk & Next.js',
}

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
    
        appearance={{
        baseTheme: dark,
      }}
      >
      
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
         
          {children}
        </body>
      </html>
      
    </ClerkProvider>
  )
}
