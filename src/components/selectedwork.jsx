import Image from "next/image";
import projects from "../data/projects.json";
import Link from "next/link";

const workItems = [
  {
    title: "Endpoint Forensics and Threat Triage Using Cyber Triage",
    tags: [
      "Windows Forensics",
      "Incident Response",
      "Threat Triage",
      "Endpoint Security",
    ],
    year: 2024,
    image: "/IRPlanning.png",
    href: "",
  },
  {
    title: "Microsoft Security System Administration Lab",
    tags: [
      "Windows Security",
      "Active Directory",
      "User Management",
      "Security Hardening",
    ],
    year: 2024,
    image: "/DNSConfig.png",
    href: "",
  },
  {
    title: "Analyzing Network Traffic with Wireshark",
    tags: [
      "Network Forensics",
      "Packet Analysis",
      "Wireshark",
      "Intrusion Detection",
    ],
    year: 2025,
    image: "/BehanceTitle.png",
    href: "",
  },
  {
    title: "Exploring Network Analysis with Wireshark",
    tags: [
      "Network Forensics",
      "Wireshark",
      "Packet Analysis",
      "Intrusion Detection",
      "TCP/IP",
    ],
    year: 2024,
    image: "/WiresharkAnalysis.png",
    href: "",
  },
  {
    title: "Implementing Access Control Lists in Linux",
    tags: [
      "Windows Security",
      "File Permissions",
      "Access Control",
      "System Hardening",
    ],
    year: 2025,
    image: "/BehanceTitle.png",
    href: "",
  },
  {
    title:
      "Demonstrating Access Control Lists Implementation for Network Security",
    tags: [
      "Network Security",
      "ACLs",
      "Traffic Filtering",
      "Firewall Rules",
      "Linux Networking",
    ],
    year: 2024,
    image: "/ACLNetworkSecurity.png",
    href: "",
  },
  {
    title: "Deploying and Testing a Secure SSH Honeypot",
    tags: [
      "Linux Security",
      "Threat Detection",
      "SSH Security",
      "Cyber Deception",
    ],
    year: 2025,
    image: "/HoneypotAttack.png",
    href: "",
  },
  {
    title: "Demonstrating DNS Configuration",
    tags: [
      "Network Configuration",
      "Windows Server",
      "Linux Networking",
      "Name Resolution",
    ],
    year: 2024,
    image: "/DNSConfig.png",
    href: "",
  },
  {
    title: "Managing IAM Users and Permissions in AWS",
    tags: ["Cloud Security", "IAM", "AWS", "User Management", "Access Control"],
    year: 2025,
    image: "/AWSCloudIAM.png",
    href: "",
  },
  {
    title: "Deploying a VPC with Subnets, Routing, and a Web Server in AWS",
    tags: [
      "Cloud Networking",
      "AWS",
      "VPC",
      "Subnets",
      "Routing",
      "Web Server",
    ],
    year: 2025,
    image: "/CustomVPC.png",
    href: "",
  },
  {
    title: "Scale and Load Balance Your Architecture in AWS",
    tags: [
      "Cloud Architecture",
      "Auto Scaling",
      "Load Balancing",
      "AWS",
      "High Availability",
    ],
    year: 2025,
    image: "/LoadBalancing.png",
    href: "",
  },
];

export default function SelectedWorkSection() {
  return (
    <section className="bg-stone-100 py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-600 leading-tight mb-4">
            Showcased <br />
            Work
          </h2>
        </div>

        {/* Work Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((item) => (
            <Link
              key={item.slug}
              href={`/projects/${item.slug}`}
              className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title + Tags */}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <div className="flex gap-2 mt-2">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs px-3 py-1 bg-blue-50 text-blue-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
