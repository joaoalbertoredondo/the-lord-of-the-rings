import { client } from "@/lib/sanity";
import { SimplifiedCharacter } from "../../interface";
import Link from "next/link";
import Image from "next/image";
import characters from "@/sanity/schemaTypes/characters";
import races from "@/sanity/schemaTypes/races";

async function getData(race: string) {
  const query = `*[_type == "characters" && race->name == "${race}"] {
    _id,
    name,
    "races": race->name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url,
}`;

  const data = await client.fetch(query);

  return data;
}

async function Races({ params }: { params: { races: string } }) {
  const data: SimplifiedCharacter[] = await getData(params.races);

  return (
    <div className="flex mt-10 justify-center">Race name
      <div className="md:grid md:grid-cols-3 md:gap-4 lg:grid lg:grid-cols-4 lg:gap-6 px-3">
        <div>{data.map((characters) => (
          <div key={characters._id}>{characters.race}</div>
      
        ))}</div>
        
      </div>
    </div>
  );
}


export default Races;
