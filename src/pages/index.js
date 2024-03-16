import Image from "next/image";
import { Inter } from "next/font/google";
import Pager from "@/components/pager";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`fixed h-full w-full inset-0 ${inter.className}`}>
      <Pager />
    </main>
  );
}
