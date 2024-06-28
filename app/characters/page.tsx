import CharsList from "../components/CharsList";

function page() {
  return (
    <div className="mb-10">
      <CharsList random={true} />
    </div>
  );
}

export default page;
