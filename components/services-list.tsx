import Link from "next/link";

interface ServicesListProps {
  services: readonly string[];
  className?: string;
}

export function ServicesList({ services, className = "" }: ServicesListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {services.map((service) => (
        <li key={service}>
          <Link
            href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center gap-2 text-sm hover:text-primary-100 transition-colors"
          >
            <span className="text-primary-100">▸</span>
            {service}
          </Link>
        </li>
      ))}
    </ul>
  );
}
