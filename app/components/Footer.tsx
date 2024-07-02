import Link from "next/link";

function Footer() {
  return (
    <div className="md:mt-20">
      <div className="flex justify-center">
        <Link href={"#header"}>
          <button className="w-screen text-gray-300 hover:text-gray-500 hover:bg-[#161616] bg-[#191919] p-2 shadow-lg shadow-y-[-8px] shadow-black/30 font-middle">
            back to top
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-between h-32 p-5 bg-[#161616]">
        <div className="flex justify-center">
          <Link
            href="https://lotr.fandom.com/"
            className="font-bold text-yellow-500"
            target="_blank"
          >
            Source
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-gray-600">
            Created and Developed by JoaoAlbertoRedondo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
