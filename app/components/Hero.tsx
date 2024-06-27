import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

async function Hero() {
  const data = await getData();

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          height={1276}
          width={1276}
          src={urlFor(data.heroImage).url()}
          alt="HeroImage"
          className="shadow-md shadow-black/30"
        />
      </div>
      <div className="flex flex-col items-center text-yellow-500">
        <h1 className="font-middle font-extrabold pt-5 text-xl md:text-2xl lg:text-4xl md:pb-2 drop-shadow">
          welcome to the argonath portal
        </h1>
        <h2 className="font-middle font-semibold md:text-xl lg:text-2xl drop-shadow">
          here you can check the lord of the rings characters
        </h2>
      </div>
    </div>
  );
}

export default Hero;
