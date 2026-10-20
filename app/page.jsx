import { CONFIG as C } from "@/lib/siteConfig";
import WithMapPage from "@/components/with-map/WithMapPage";

export const metadata = { title: C.meta.title, description: C.meta.description };

export default function Page() {
  return <WithMapPage />;
}
