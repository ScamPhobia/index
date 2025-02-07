import { Brain, Lock, Shield, Zap, BookOpen } from "lucide-react"

const features = [
  {
    name: "Review the Audit",
    description: "Review project Audit(s) and analyze trade-offs",
    icon: Brain,
  },
  {
    name: "Transparency",
    description: "We only trust projects that are open about their code. so we can verify. No hidden tricks allowed!",
    icon: BookOpen,
  },
  {
    name: "Enterprise-Grade Simplicity",
    description: "Top-tier security to protect your assets and keep your investments safe from threats.",
    icon: Shield,
  },
  {
    name: "Team Background",
    description: "Analysis of the team behind the project to ensure they have the right experience and history for a trustworthy investment.",
    icon: Zap,
  },
  {
    name: "Verify Execution",
    description: "Make sure the Tokenomics are executed by machines, not humans behind the project.",
    icon: Lock,
  },
]


export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">What we do</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Being Audited does not mean anything until you read the audit report!
          <br />
          We do that for you and generate a score based on our Standard Checklist.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

