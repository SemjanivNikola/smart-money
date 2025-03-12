import SideBarNav from '@/src/components/navigation/SideBarNav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Smart Money",
    description: "Manage your money flow and investments in efficient way.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="main-layout">
                    <SideBarNav />
                    {children}
                </main>
            </body>
        </html>
    )
}
