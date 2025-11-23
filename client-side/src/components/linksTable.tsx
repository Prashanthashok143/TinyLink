import { useGetTinyLinks } from "../api/tinyLinkService";

type TinyLink = {
  code: string;
  targetURL: string;
  clicks: number;
  lastClicked?: string | null;
};

const LinksTable = () => {
   const { data: response } = useGetTinyLinks();
   const links = response?.data ?? [];
   console.log("links", links)

  return (
    <div className="w-full bg-white shadow-sm rounded-xl p-4 border h-[75%]">
      <h2 className="text-xl font-semibold mb-3">Links</h2>

      <input
        type="text"
        placeholder="Search/filter"
        className="w-full mb-4 px-3 py-2 border rounded-lg"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left">
           <thead>
            <tr className="border-b bg-gray-50 text-gray-600">
              <th className="py-3 px-3">Short code</th>
              <th className="py-3 px-3">Target URL</th>
              <th className="py-3 px-3">Total clicks</th>
              <th className="py-3 px-3">Last clicked time</th>
            </tr>
          </thead>

          <tbody>
            {links.map((row: TinyLink, index: number) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-3 font-medium">{row.code}</td>
                <td className="py-3 px-3 text-gray-700 truncate max-w-[200px]" title={row.targetURL}>
                  <a href={row.targetURL} target="_blank">{row.targetURL}</a>
                </td>
                <td className="py-3 px-3">{row.clicks}</td>
                <td className="py-3 px-3 text-gray-500">{row.lastClicked}</td>
                <td className="py-3 px-3">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LinksTable;
