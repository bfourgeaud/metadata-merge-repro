import { Metadata, ResolvingMetadata } from "next"

interface ChildPageProps {
  searchParams?: { search?: string }
}

export async function generateMetadata({ searchParams }: ChildPageProps, parent?: ResolvingMetadata):Promise<Metadata> {
  const parentOpenGraph = (await parent)?.openGraph

  return {
    title: `Recherche : "${searchParams?.search || ""}"`,
    openGraph: {
      ...parentOpenGraph,
      title: `Recherche : "${searchParams?.search || ""}"`,
      url: ""
    }
  }
}

export default function ChildPage({  }: ChildPageProps) {
  return (
  <div>
    CHILD PAGE
  </div>
  )
}