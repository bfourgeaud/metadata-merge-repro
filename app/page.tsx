import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      HOME PAGE
      <Link href="/child" className="text-blue-500 hover:text-blue-600">Child Page</Link>
    </main>
  )
}
