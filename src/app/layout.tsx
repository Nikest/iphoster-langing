import {getLocale, setRequestLocale} from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import "./globals.css";
import type {Metadata} from "next";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "IPHOSTER",
    description: "IPHOSTER",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const locale = await getLocale();
    setRequestLocale(locale);

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
        </html>
    );
}
