export function RegisterInfoLabel({
  tittle,
  desc,
}: {
  tittle: string;
  desc: string;
}) {
  return (
    <>
      <div>
        <h1 className="text-gray-800 font-bold md:text-2xl text-center text-lg">
          {tittle}
        </h1>
        <h6 className="text-gray-400 text-center">{desc}</h6>
      </div>
    </>
  );
}
