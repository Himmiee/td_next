/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export function SocialLinks() {
  return (
    <div className="flex gap-10 pt-4">
      {SOCIAL_LINKS.map(({ name, href, icon }) => {
        // const Icon = iconMap[icon];
        return (
          <Link
            key={name}
            href={href}
            className="text-gray-100 hover:text-primary-60 transition-colors"
            aria-label={`Follow us on ${name}`}
          >
            <Image src={icon} alt={name} width={18} height={18} />
          </Link>
        );
      })}
    </div>
  );
}
