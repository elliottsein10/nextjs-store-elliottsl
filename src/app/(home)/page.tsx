import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";
import {Metadata} from "next"

export const metadata: Metadata = {
  title: "Future world",
  description: "Welcome to the future world, an eccomerce from other cent",
  keywords: ["ecomerce", "future", "world", "technology"] 
}

export default function Home() {
  return (
    <main>
      <MainProducts/>
    </main>
  );
}
