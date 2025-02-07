import { getAuditBySlug, getAllAudits } from "../../../lib/mdUtils"
import { marked } from "marked"

export async function generateStaticParams() {
  const audits = getAllAudits()
  return audits.map((audit) => ({
    slug: audit.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const audit = getAuditBySlug(params.slug)
  return {
    title: audit.meta.title,
    description: audit.meta.description,
  }
}

export default function AuditPage({ params }: { params: { slug: string } }) {
  const audit = getAuditBySlug(params.slug)
  const contentHtml = marked(audit.content)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{audit.meta.title}</h1>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}

