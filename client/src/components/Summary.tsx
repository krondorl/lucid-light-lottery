interface SummaryProps {
  numberOfTickets: number;
  yearsSpent: number;
  costOfTickets: number;
}

function Summary({
  numberOfTickets,
  yearsSpent,
  costOfTickets,
}: Readonly<SummaryProps>) {
  return (
    <div className="Rectangle43 max-w-80 mb-6">
      <table>
        <tbody>
          <tr>
            <td className="text-sm font-bold pl-3 pt-3 pb-3">
              Number of tickets:
            </td>
            <td className="text-sm font-bold pl-3 pt-3 pb-3">
              {numberOfTickets}
            </td>
          </tr>
          <tr>
            <td className="text-sm font-bold pl-3 pb-3">Years spent:</td>
            <td className="text-sm font-bold pl-3 pb-3">{yearsSpent}</td>
          </tr>
          <tr>
            <td className="text-sm font-bold pl-3 pb-3">Cost of tickets:</td>
            <td className="text-sm font-bold pl-3 pb-3">{costOfTickets}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Summary;
