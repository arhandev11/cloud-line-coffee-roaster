import Home from "@/components/Home";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata("id");

export default function Page() {
  return <Home lang="id" />;
}
