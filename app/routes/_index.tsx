import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "~/components/Container";

import HeroSection from "~/components/HeroSection";
import HowItWorks from "~/components/HowItWorks";
import ItemCard from "~/components/ItemCard";
import Section from "~/components/Section";

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
        <Section title="Our Designs">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map(item => <ItemCard item={item} />)}
          </div>
        </Section>
      </Container>
      {/* End of Items Section */}
    </div>
  );
}
