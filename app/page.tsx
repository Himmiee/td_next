import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4  items-center justify-center pt-10">
      <Button asChild>
        <Link href="/request-a-quote">
          Request a Quote
        </Link>
      </Button>

      <Button asChild>
        <Link href="/testimonials">
          Testimonials
        </Link>
      </Button>

      <Button asChild variant={"outline"} >
        <Link href="/contact" >Contact</Link>
      </Button>
    </div>
  );
}
