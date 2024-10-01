import { ServerAction } from "@/actions/action";
import {AsyncComponent} from "@/components/AsyncComponent";
import { Suspense } from "react";
export default function Home() {
  ServerAction();
  return (
    <>
    <div>Hello World</div>
    <em className="block">This is <strong>Instant Loading data</strong></em>
    <Suspense fallback={<>Loading <strong>AsyncComponent</strong></>}>
      <AsyncComponent/>
    </Suspense>
    </>
  );
}
