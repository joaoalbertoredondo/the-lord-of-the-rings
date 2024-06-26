import { client, urlFor } from "@/lib/sanity";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import Search from "./Search";

async function getData() {
  const query = "*[_type == 'logos'][0]";

  const data = await client.fetch(query);

  return data;
}

async function Header() {
  const data = await getData();
  return (
    <header>
      <div>
        <nav className="p-5 text-gray-400 flex justify-between">
          <BurgerMenu />

          <ul className="md:flex md:items-start z-20 md:z-auto md:static absolute md:bg-inherit md:w-auto rounded-lg opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-300">
            <li className="mx-2 my-3 md:my-0 font-ring">
              <Link
                href={"/"}
                className="text-xl hover:text-gray-600 duration-300"
              >
                home
              </Link>
            </li>
            <li className="mx-2 my-3 md:my-0">
              <Link
                href={"#"}
                className="text-xl hover:text-gray-600 duration-300 font-ring"
              >
                characters
              </Link>
            </li>
          </ul>

          <div className="flex justify-center">
            <Link href={"/"}>
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
            </Link>
          </div>
          <Search />
          <input
            type="text"
            placeholder=" Search"
            className="h-6 hidden md:block rounded-md bg-gray-800 focus:bg-slate-300 focus:text-gray-800 outline-none transition-all ease-in duration-300"
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
