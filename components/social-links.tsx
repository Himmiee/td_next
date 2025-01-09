/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Facebook,
  Instagram,
  Twitter,
  TypeIcon as type,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Facebook,
  Instagram,
};

export function SocialLinks() {
  return (
    <div className="flex gap-10 pt-4">
      {SOCIAL_LINKS.map(({ name, href, icon }) => {
        const Icon = iconMap[icon];
        return (
          <Link
            key={name}
            href={href}
            className="text-gray-100 hover:text-primary-60 transition-colors"
            aria-label={`Follow us on ${name}`}
          >
            <Icon className="h-6 w-6  " fill="black" />
          </Link>
        );
      })}
    </div>
  );
}
