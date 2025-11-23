import { useState } from "react"
import AddLink from "./addlink";
import LinksTable from "./linksTable";

const DashBoard = () => {
  const [model,setModel] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen">
<div className="flex justify-between p-2 items-center">
  <div className="text-3xl font-bold">TinyLink Dashboard</div>

  <div className="flex items-center gap-2">
    <button className="bg-black text-white
     rounded-md px-4 py-2 mt-4 shrink-0 
     cursor-pointer hover:bg-gray-800"
     onClick={()=> setModel(true)}>
      Add Link
    </button>
  </div>
</div>
<div className="absolute right-0 pr-3 z-10">
  <AddLink model={model} setModel={setModel}/>
</div>
<div className="w-[75%] flex p-2">
  <LinksTable/>
</div>
</div>

  )
}

export default DashBoard