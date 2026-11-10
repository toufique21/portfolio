// Edit this file to update the portfolio content.
// Project names, locations and metrics are representative placeholders — replace
// them with real work before publishing.

export const profile = {
  name: "TURJO",
  role: "Electrical & Electronics Engineer",
  location: "Dhaka, Bangladesh",
  email: "hello@turjo.dev",
  availability: "Available for new projects",
  intro:
    "I design, install and troubleshoot the systems that keep buildings and industry running — transformers, solar, lifts, generators and substations.",
} as const;

export const navLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "05", label: "Core systems" },
  { value: "360°", label: "Design to maintenance" },
  { value: "24/7", label: "Uptime mindset" },
] as const;

export const expertise = [
  {
    id: "transformer",
    title: "Power transformers",
    blurb:
      "Load studies, sizing, protection and preventive maintenance for distribution and industrial transformers — from 100 kVA units to multi-megawatt installations.",
    tags: ["Load study", "Protection", "Oil testing"],
    span: "lg:col-span-3",
  },
  {
    id: "solar",
    title: "Solar & renewables",
    blurb:
      "Rooftop and ground-mount PV systems, on-grid or hybrid. Feasibility, net metering, string design, commissioning and performance monitoring.",
    tags: ["PV design", "Net metering", "Hybrid"],
    span: "lg:col-span-3",
  },
  {
    id: "lift",
    title: "Lifts & elevators",
    blurb:
      "Electrical installation, controller diagnostics and VVVF modernisation for passenger, cargo and hospital lifts.",
    tags: ["VVVF", "Safety circuits", "AMC"],
    span: "lg:col-span-2",
  },
  {
    id: "generator",
    title: "Generators & backup",
    blurb:
      "Standby power that starts when it matters. ATS/AMF integration, synchronisation panels and full load-bank testing.",
    tags: ["ATS / AMF", "Sync panels", "Load testing"],
    span: "lg:col-span-2",
  },
  {
    id: "substation",
    title: "Substations & distribution",
    blurb:
      "11 kV and LV distribution, switchgear selection, earthing and protection coordination for reliable, serviceable sites.",
    tags: ["11 kV", "Switchgear", "Earthing"],
    span: "lg:col-span-2",
  },
] as const;

export type ExpertiseId = (typeof expertise)[number]["id"];

export type ProjectSignal = "substation" | "solar" | "generator" | "lift";

export const projects = [
  {
    title: "500 kVA substation upgrade",
    client: "Industrial park · Narayanganj",
    year: "2025",
    summary:
      "Replaced aging switchgear, re-coordinated protection and rebuilt the earthing grid — without stopping production.",
    metric: "Zero shutdown",
    tags: ["Substation", "Protection", "Commissioning"],
    signal: "substation",
  },
  {
    title: "120 kW rooftop solar",
    client: "Textile facility · Gazipur",
    year: "2025",
    summary:
      "On-grid rooftop array designed around shade patterns and shift load, with net metering and remote performance monitoring.",
    metric: "168 MWh / yr",
    tags: ["Solar", "Net metering", "Monitoring"],
    signal: "solar",
  },
  {
    title: "1.2 MW standby plant",
    client: "Corporate HQ · Dhaka",
    year: "2024",
    summary:
      "N+1 generator plant with synchronisation, AMF changeover and a full load-bank acceptance test before handover.",
    metric: "8 s changeover",
    tags: ["Generator", "Sync panel", "Load bank"],
    signal: "generator",
  },
  {
    title: "Eight-stop lift modernisation",
    client: "Mixed-use tower · Chattogram",
    year: "2024",
    summary:
      "VVVF drives, new controllers and safety-circuit upgrades across four cars — phased so the building never lost a lift.",
    metric: "45% less energy",
    tags: ["Lift", "VVVF", "Retrofit"],
    signal: "lift",
  },
] as const;

export const processSteps = [
  {
    title: "Walk the site",
    description:
      "Load study, measurements and a frank look at what the existing system can actually carry.",
  },
  {
    title: "Draw it properly",
    description:
      "Single-line diagrams, protection coordination and a bill of materials that survives procurement.",
  },
  {
    title: "Build & commission",
    description:
      "Installation supervision, testing and documentation. Nothing gets energised until the numbers agree.",
  },
  {
    title: "Stay on call",
    description:
      "Preventive maintenance, monitoring and a clear escalation path for when the grid misbehaves.",
  },
] as const;

export const toolbox = [
  "AutoCAD Electrical",
  "ETAP",
  "PVsyst",
  "DIgSILENT",
  "Fluke",
  "Megger",
  "PLC / SCADA",
  "Microsoft Project",
] as const;

export const principles = [
  {
    title: "Safety is the specification",
    description:
      "Isolation, earthing and lock-out discipline are not extras. They are the first line of the drawing.",
  },
  {
    title: "Document as you build",
    description:
      "As-builts, test sheets and a handover pack the next engineer can actually use.",
  },
] as const;

export const projectTypes = [
  "Transformer",
  "Solar",
  "Lift",
  "Generator",
  "Substation",
  "Other",
] as const;
