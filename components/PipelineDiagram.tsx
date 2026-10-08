import { ArrowRight, ArrowDown } from "./icons";

type Node = { label: string; sub: string; tone?: "accent" | "plain" };

function Chip({ label, sub, tone = "plain" }: Node) {
  return (
    <div
      className={`min-w-0 flex-1 rounded-xl border px-4 py-3 ${
        tone === "accent" ? "border-accent/50 bg-accent/15" : "border-night-line bg-night-2"
      }`}
    >
      <div className="text-sm font-medium text-white">{label}</div>
      <div className="mt-0.5 text-xs leading-snug text-white/55">{sub}</div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center text-white/35" aria-hidden>
      <ArrowRight className="hidden size-4 @3xl:block" />
      <ArrowDown className="size-4 @3xl:hidden" />
    </div>
  );
}

function Lane({ title, nodes }: { title: string; nodes: Node[] }) {
  return (
    <div className="rounded-2xl border border-night-line bg-night/60 p-4 sm:p-5">
      <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">{title}</div>
      <div className="flex flex-col gap-2 @3xl:flex-row @3xl:items-stretch @3xl:gap-3">
        {nodes.map((n, i) => (
          <div key={n.label} className="contents">
            {i > 0 && <Connector />}
            <Chip {...n} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Visual summary of how an Access Modular enquiry moves through the stack.
export default function PipelineDiagram() {
  return (
    <figure className="@container rounded-3xl border border-night-line bg-night-2/60 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
        </span>
        <span className="text-sm text-white/80">Visitor submits the quote form on amodular.com.au</span>
      </div>
      <div className="grid gap-3">
        <Lane
          title="Server side: CRM and automation"
          nodes={[
            { label: "Contact Form 7", sub: "Validated enquiry, custom PHP handler" },
            { label: "Azure Service Bus", sub: "Queued so no lead is ever lost", tone: "accent" },
            { label: "NetSuite", sub: "Lead record created for sales" },
            { label: "Iterable", sub: "Contact synced for follow up journeys" },
          ]}
        />
        <Lane
          title="Browser: measurement"
          nodes={[
            { label: "dataLayer", sub: "generate_lead event, no PII" },
            { label: "Google Tag Manager", sub: "Tags and triggers" },
            { label: "GA4", sub: "Conversions and reporting", tone: "accent" },
          ]}
        />
      </div>
      <figcaption className="mt-4 text-xs text-white/45">
        Simplified view of the enquiry flow I designed and implemented.
      </figcaption>
    </figure>
  );
}
