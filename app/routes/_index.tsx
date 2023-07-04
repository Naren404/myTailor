import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "My Tailor" },
    { name: "description", content: "My Tailor App" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="container p-4">
        <div className="text-lg font-bold">Built In Progress.....</div>
          The app now only aims to setup and deploy.
        </div>
    </div>
  );
}
