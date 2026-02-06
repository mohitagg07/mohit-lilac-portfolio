import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica',
  description: 'Licensed clinical psychologist specializing in anxiety, trauma, and burnout therapy for high-achieving adults in Santa Monica, California.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}