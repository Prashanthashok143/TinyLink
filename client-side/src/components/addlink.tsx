import { useState } from "react";

interface AddLinkProps {
  model: boolean;
  setModel: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddLink: React.FC<AddLinkProps> = ({ model, setModel }) => {
    const [codeData,setCodeData] = useState({
        shortCode:"",
        targetURL:""
    })
    const handleChane=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setCodeData({...codeData,[name]:value});
        console.log(e)
    }
  return (
    <>
      {model && (
        <div className="w-75 bg-white p-4 rounded-md rounded-lg">
          <div className="flex justify-between p-2 items-center">
            <p className="text-2xl semi-bold">Add Link</p>
            <button
              className="bg-black text-white rounded-md px-4 
            py-2 mt-4 shrink-0 cursor-pointer hover:bg-gray-800"
              onClick={() => setModel(false)}
            >
              Cancel
            </button>
          </div>
          <div>
            <label className="Short-code-label">Short Code</label>
            <input
              type="text"
              name="shortCode"
              placeholder="Enter Short Code"
              className="border-2 border-gray-300 rounded-md p-2 mt-4 w-full"
              onChange={handleChane}
              />
              <label className="target-url-label">Target URL</label>
            <input
              type="text"
              placeholder="https://example.com"
              name="targetURL"
              className="border-2 border-gray-300 rounded-md p-2 mt-4 w-full"
              onChange={handleChane}
              />
            <button className="bg-black w-full text-white rounded-lg p-3 mt-2 font-bold cursor-pointer">Add Link</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddLink;
