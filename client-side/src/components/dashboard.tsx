import { useState } from "react"
import AddLink from "./addlink";

const DashBoard = () => {
  const [searchTerm , setSearchTerm] = useState("");
  const [model,setModel] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen">
<div className="flex justify-between p-2 items-center">
  <div className="text-3xl font-bold">TinyLink Dashboard</div>

  <div className="flex items-center gap-2">
    <input
      type="search"
      value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}
      placeholder="Search your links..."
      className="border-2 border-gray-300 rounded-md p-2 mt-4 w-full"
    />
    <button className="bg-black text-white
     rounded-md px-4 py-2 mt-4 shrink-0 
     cursor-pointer hover:bg-gray-800"
     onClick={()=> setModel(true)}>
      Add Link
    </button>
  </div>
</div>
<div className="flex justify-center">
  <AddLink model={model} setModel={setModel}/>
</div>
</div>

  )
}

export default DashBoard