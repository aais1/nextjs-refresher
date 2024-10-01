import { redirectUser, ServerAction } from "@/actions/action";
import { redirect } from "next/navigation";
import {AsyncComponent} from "@/components/AsyncComponent";
import Link from "next/link";
import { Suspense } from "react";
export default function Home() {
  //a server action that gets called on the server (basically a async function that runs on the server)
  // ServerAction();

  //a server action that redirects the user to a different page || throws err somehow idk
  // redirectUser()


  // redirect("/redirect?msg=Congrats on the redirection") //this works but the above doesnt hmmm i wonder why 🤔(btw i really dk)
  return (
    <>
    <div>Hello World</div>
    <em className="block">This is <strong>Instant Loading data</strong></em>
    <Suspense fallback={<>Loading <strong>AsyncComponent</strong></>}>
      <AsyncComponent/>
    </Suspense>
    <div>
      Learn About Middlewares
      <br />
      <Link href={"/test"} className="text-blue-500 underline font-semibold cursor-pointer">Test middleware</Link>
    </div>
    </>
  );
}
