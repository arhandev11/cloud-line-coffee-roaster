import Home from "@/components/Home";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata("en");

export default function Page() {
  return <Home lang="en" />;
}
