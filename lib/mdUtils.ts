import fs from "fs"
import path from "path"
import matter from "gray-matter"

const reportsDirectory = path.join(process.cwd(), "audits", "reports")

export function getAuditSlugs() {
  return fs.readdirSync(reportsDirectory)
}

export function getAuditBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(reportsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}

export function getAllAudits() {
  const slugs = getAuditSlugs()
  const audits = slugs.map((slug) => getAuditBySlug(slug))
  return audits
}

