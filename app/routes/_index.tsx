import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "~/components/Container";

import HeroSection from "~/components/HeroSection";
import HowItWorks from "~/components/HowItWorks";
import ItemCard from "~/components/ItemCard";

import { loadItems } from "~/models/item.server";

export async function loader() {
  return json(await loadItems())
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <HeroSection />
      <HowItWorks />

      {/* Start of Items Sectio */}
      <Container>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Our Designs</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map(item => <ItemCard item={item} />)}
        </div>
      </Container>
      {/* End of Items Section */}
    </div>
  );
}
