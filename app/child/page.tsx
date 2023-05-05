import { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"

type ChildPageProps = {

}

export async function generateMetadata(props: ChildPageProps, parent?: ResolvingMetadata):Promise<Metadata> {
  const parentOpenGraph = (await parent)?.openGraph

  /* Throws error */
  return {
    title: "Child",
    openGraph: {
      ...parentOpenGraph,
      title: "Child",
      url: ""
    }
  }

  /* Working */
  return {
    title: "Child",
    openGraph: {
      ...parentOpenGraph,
      images: ["https://placehold.co/1200x600"],
      title: "Child",
      url: ""
    }
  }
}

export default function ChildPage(props: ChildPageProps) {
  return (
  <main className="flex min-h-screen flex-col items-center justify-center p-24">
    CHILD PAGE
    <Link href="/" className="text-blue-500 hover:text-blue-600">Home Page</Link>
  </main>
  )
}