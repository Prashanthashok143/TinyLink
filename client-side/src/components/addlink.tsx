import { useState } from "react";
import { useCreateLinks } from "../api/tinyLinkService";

interface AddLinkProps {
  model: boolean;
  setModel: React.Dispatch<React.SetStateAction<boolean>>;
}
const initialData={
          code:"",
        targetURL:""
}
const AddLink: React.FC<AddLinkProps> = ({ model, setModel }) => {
  const {mutateAsync:createLinks} = useCreateLinks()
    const [codeData,setCodeData] = useState(initialData)
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setCodeData({...codeData,[name]:value});
        console.log(e)
    }
    console.log("data",codeData)
    const handlePostLinks = async() => {
      const {code, targetURL}=codeData;
      if(!code)  return alert("pls fill the code")
      if(!targetURL) return alert("pls fill the target")
     await createLinks(codeData);
    alert("Successsssssss")
     setCodeData(initialData)
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
              name="code"
              value={codeData.code}
              placeholder="Enter Short Code"
              className="border-2 border-gray-300 rounded-md p-2 mt-4 w-full"
              onChange={handleChange}
              />
              <label className="target-url-label">Target URL</label>
            <input
              type="text"
              value={codeData.targetURL}
              placeholder="https://example.com"
              name="targetURL"
              className="border-2 border-gray-300 rounded-md p-2 mt-4 w-full"
              onChange={handleChange}
              />
            <button className="bg-black w-full text-white rounded-lg p-3 mt-2 font-bold
             cursor-pointer"
             onClick={handlePostLinks}
            >Add Link</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddLink;
