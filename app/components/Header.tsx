import { client, urlFor } from "@/lib/sanity";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

async function getData() {
  const query = "*[_type == 'logos'][0]";

  const data = await client.fetch(query);

  return data;
}

async function Header() {
  const data = await getData();
  return (
    <header>
      <div className="flex">
        <div>
          <Image
            height={200}
            width={200}
            src={urlFor(data.logoSm).url()}
            alt="LogoSm"
            className="md:hidden lg:hidden"
          />
          <Image
            height={400}
            width={400}
            src={urlFor(data.logoLg).url()}
            alt="LogoLg"
            className="hidden md:block lg:block"
          />
        </div>
        <form className="flex items-center space-x-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input type="text" placeholder="Search" />
          <button hidden>Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
