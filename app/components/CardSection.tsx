import Link from "next/link";
import CharsList from "./CharsList";

function CardSection() {
  return (
    <section className="flex flex-col items-center mb-6">
      <CharsList numOfChars={4} random={true} />
      <div className="flex w-full lg:max-w-[1276px] justify-end mt-2 px-3">
        <Link href="/characters">
          <p className="text-gray-300 hover:text-gray-400 underline hover:no-underline">see all characters</p>
        </Link>
      </div>
    </section>
  );
}

export default CardSection;
