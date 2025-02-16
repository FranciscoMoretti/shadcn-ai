import Hero from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { GitHubStats } from "@/components/sections/github-stats";
import { RepoActivity } from "@/components/sections/repo-activity";
import { ShippingVelocity } from "@/components/sections/shipping-velocity";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <GitHubStats />
      <RepoActivity />
      <ShippingVelocity />
      <Footer />
    </main>
  );
}
