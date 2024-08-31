import Image from "next/image";
import ExperimentsPage from "./dashboard/page";
import LandingPageWidget from "@/components/LandingPageWidget";

export default function Home() {
  return (
    <main className="h-screen flex-1 flex flex-col justify-center">
      <LandingPageWidget />
    </main>
  );
}
