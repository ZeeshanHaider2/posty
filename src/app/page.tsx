import {signIn, auth} from "@/auth";
import { Button } from "@/components/ui/button"
import {Navbar} from "@/components/navbar"
export default async function Home() {
  const session = await auth();
  //console.log("session", session);
  return (
      <main className="flex min-h-screen flex-col item-center  p-24">
      <Navbar/>
      <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      {JSON.stringify(session)}
    <Button variant="outline">Sign In</Button>
   </form>

      </main>
      
  );
}
