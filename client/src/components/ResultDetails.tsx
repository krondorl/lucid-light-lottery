interface ResultDetailsProps {
  matches2: number;
  matches3: number;
  matches4: number;
  matches5: number;
}

function ResultDetails({
  matches2,
  matches3,
  matches4,
  matches5,
}: Readonly<ResultDetailsProps>) {
  return (
    <ul className="container max-w-lg grid grid-cols-2 md:grid-cols-4 shadow-matches">
      <li className="border border-brand-yellow p-3">
        <p className="text-center text-brand-indigo text-xs mb-2">2 matches</p>
        <p className="text-center text-brand-indigo text-base uppercase">
          <strong>{matches2}</strong>
        </p>
      </li>
      <li className="border border-brand-yellow p-3">
        <p className="text-center text-brand-indigo text-xs mb-2">3 matches</p>
        <p className="text-center text-brand-indigo text-base uppercase">
          <strong>{matches3}</strong>
        </p>
      </li>
      <li className="border border-brand-yellow p-3">
        <p className="text-center text-brand-indigo text-xs mb-2">4 matches</p>
        <p className="text-center text-brand-indigo text-base uppercase">
          <strong>{matches4}</strong>
        </p>
      </li>
      <li className="border border-brand-yellow p-3">
        <p className="text-center text-brand-indigo text-xs mb-2">5 matches</p>
        <p className="text-center text-brand-indigo text-base uppercase">
          <strong>{matches5}</strong>
        </p>
      </li>
    </ul>
  );
}

export default ResultDetails;
