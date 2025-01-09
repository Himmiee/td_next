import { CONTACT_INFO, SERVICES_LEFT, SERVICES_RIGHT } from "@/lib/constants";
import Newsletter from "../newsletter-form";
import { ServicesList } from "../services-list";
import { SocialLinks } from "../social-links";
import { TrustedLogos } from "../trusted-logos";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full">
      <Newsletter />
      <footer className="bg-primary-60 w-full">
        <div className="auto-container w-full">
          {/* Main Footer Content */}
          <div className="flex flex-wrap lg:flex-nowrap w-full gap-y-8">
            {/* Trusted By Section */}
            <section className="lg:w-[35%] w-full">
              <h4 className="mb-6 text-xl font-semibold">Trusted By</h4>
              <TrustedLogos />
            </section>

            {/* Contact Section */}
            <section className="lg:w-[30%] w-full">
              <h4 className="mb-6 text-xl font-semibold">Contact</h4>
              <div className="space-y-4">
                <Link
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-sm hover:text-primary-100 transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary-100" />
                  {CONTACT_INFO.email}
                </Link>
                {CONTACT_INFO.phones.map((phone) => (
                  <Link
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-sm hover:text-primary-100 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary-100" />
                    {phone}
                  </Link>
                ))}
                <SocialLinks />
              </div>
            </section>

            {/* Services Columns */}
            <div className="lg:flex lg:justify-between lg:w-[35%] w-full gap-8">
              <section className="w-full lg:w-auto">
                <h4 className="mb-6 text-xl font-semibold">Services</h4>
                <ServicesList services={SERVICES_LEFT} />
              </section>
              <section className="w-full lg:w-auto">
                <ServicesList
                  services={SERVICES_RIGHT}
                  className="lg:pt-8 pt-0"
                />
              </section>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t bg-primary-100 py-4 text-center text-sm text-white">
          <p>
            copyrights © {new Date().getFullYear()} - Pearl Projects and
            Development Ltd
          </p>
        </div>
      </footer>
    </div>
  );
}
