import Link from "next/link"
import { getAllAudits } from "../../lib/mdUtils"

export default function Audits() {
  const audits = getAllAudits()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Audits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audits.map((audit) => (
          <div key={audit.slug} className="shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{audit.meta.title}</h2>
            <p className="mb-4">{audit.meta.description}</p>
            <Link
              href={`/audits/${audit.slug}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

