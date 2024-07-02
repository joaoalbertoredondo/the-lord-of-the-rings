import { client } from "@/lib/sanity";
import Image from "next/image";
import { SimplifiedCharacter } from "../interface";
import Link from "next/link";

async function getData(
  random: boolean,
  numberOfChars?: number
): Promise<SimplifiedCharacter[]> {
  const query = `*[_type == 'characters']${!!numberOfChars ? "[0..." + numberOfChars + "]" : ""} | order(lower(title) asc) {
    _id,
    race,
    description,
    name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

interface Props {
  random: boolean;
  numOfChars?: number;
}

async function CharsList({ numOfChars, random }: Props) {
  const data: SimplifiedCharacter[] = await getData(random, numOfChars);
  return (
    <div className="flex mt-10 justify-center">
      <div className="md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-6 px-3">
        {data.map((characters) => (
          <div
            key={characters._id}
            className="mt-3 md:mt-0 flex md:flex-col rounded-lg overflow-hidden md:max-w-[295px] bg-slate-300/30 md:opacity-70 md:hover:opacity-100 md:hover:translate-y-[-3px] transition shadow-md shadow-black/30"
          >
            <Link href={`/characters/${characters.slug}`}>
              <div className="h-44 w-44 md:w-[295px] md:h-[250px] flex-shrink-0 overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  src={characters.imageUrl}
                  alt="Character Image"
                />
              </div>
            </Link>
            <div className="p-2">
              <h2 className="text-center font-ring lowercase font-semibold text-xl">
                {characters.name}
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
              </h2>
              <p className="text-justify line-clamp-5 mt-2">
                {characters.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharsList;
