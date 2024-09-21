
import {Navbar} from "@/components/navbar"
import {PostForm} from "@/components/post-form"
export default async function Home() {
 
  return (
      <main className="flex min-h-screen flex-col item-center  p-24">
      <Navbar/>
      <PostForm/>
      </main>
      
  );
}
