export default function TableVC() {
  return (
    <table className="mt-6 size-full ">
      <thead className="h-14 border-b border-neutral-200">
        <tr className="mr-16 flex items-center justify-between [&>th]:text-left [&>th]:text-neutral-500">
          <th>
            6068 <br />
            Investors
          </th>
          <th>Fav</th>
          <th>Match</th>
          <th>Geography</th>
          <th>Checks</th>
          <th>Stages</th>
        </tr>
      </thead>
      <tbody className="mt-6 block h-[calc(100%-11.9rem)] overflow-y-scroll [&>tr]:mr-12 [&>tr]:flex [&>tr]:justify-between">
        <tr>
          <td>VC 1</td>
          <td>Location 1</td>
          <td>Investment Stage 1</td>
          <td>Check Size 1</td>
          <td>Investment Focus 1</td>
          <td>Stages</td>
        </tr>
      </tbody>
    </table>
  );
}
