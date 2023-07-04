import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ItemCard from "~/components/ItemCard";

import { loadItems } from "~/models/item.server";

export async function loader() {
  return json(await loadItems())
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="container p-4">
        <div className="text-lg font-bold">Built In Progress.....</div>
          The app now only aims to setup and deploy.
        </div>
        <ul>
          {data.map((item => 
            <ItemCard item={item} />
            ))}
        </ul>
    </div>
  );
}
