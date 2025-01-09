import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid  items-center justify-center pt-10">
      <Button asChild>
        <Link className="bg-" href="/testimonial">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/testimonial">Login</Link>
      </Button>
    </div>
  );
}
