import Head from "./components/Head"
import Hero from "./components/Hero"

function page() {
  return (
    <div>
      <Head />
      <Hero />
      <h1 className="p-10 font-ring text-6xl">font test</h1>
      <p className="p-10">link for the database <a href="https://lotr.fandom.com/wiki/Gandalf" className="font-bold text-blue-400" target="_blank">click here</a>!</p>
    </div>
  )
}

export default page