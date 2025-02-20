import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Trust your guts
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Before engaging to a crypto project, make sure to look into 
          {" "}<Link className="underline" href="/audits">Audit Reports</Link> {" "}
          and check the project score.

          <br />
          <br />
          If your project is not listed:
        </p>
        <Button size="lg" className="mt-4">
          let us know
        </Button>
      </div>
    </section>
  )
}

