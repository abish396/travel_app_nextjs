
"use client";
import Companies from '../components/companies/companies';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Companies />
    </main>
  )
}