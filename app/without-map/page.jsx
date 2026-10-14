import { CONFIG as C } from "@/lib/siteConfig";
import WithoutMapPage from "@/components/without-map/WithoutMapPage";

export const metadata = { title: C.meta.title, description: C.meta.description };

export default function Page() {
  return <WithoutMapPage />;
}
