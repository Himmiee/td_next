"use client";

import Image from "next/image";
import eventsImg from "@/app/assets/png/events.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CalendarX2, X } from "lucide-react";

export const EventSection = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <main className="h-[350px] sm:h-[430px] relative">
      <section className="relative w-full h-full">
        {/* Hero Image with Gradient */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={eventsImg}
              alt="About Hero Background"
              layout="fill"
              objectFit="cover"
              className="clip-hero"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* Grid Content */}
        <div className="relative h-full flex flex-col xl:flex-row xl:justify-between xl:items-center px-6 md:px-12 lg:px-24 pt-24 space-y-8 sm:space-y-0">
          {/* Left Side Content */}
          <div className="text-white xl:text-left xl:self-center">
            <div className="text-[40px] font-semibold">Upcoming Events</div>
            <p className="text-lg max-w-sm">
              Keep up with all our latest events, webinars and more
            </p>
          </div>

          {/* Right Side Content */}
          <div className="text-lg xl:text-left xl:self-center">
            <Button
              className="bg-white px-12 py-6 font-medium text-black hover:bg-gray-100"
              onClick={() => setShowDialog(true)}
            >
              View Events Page
            </Button>
          </div>
        </div>

        {/* No Events Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md bg-white">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-semibold">
                No Events Yet
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4 py-4">
              <CalendarX2 className="h-12 w-12 text-yellow-400" />
              <p className="text-center text-gray-600">
                There are no upcoming events at the moment. Please check back
                soon for new announcements!
              </p>
            </div>
            {/* Custom Close Button */}
            <button
              onClick={() => setShowDialog(false)}
              className="absolute right-4 top-4 opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
};
