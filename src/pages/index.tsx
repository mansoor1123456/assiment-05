export default function Home() {
  return ( 
<>
    <div className="flex border-4 border-green-500 py-8 justify-evenly bg-yellow-500">
    
    <div className="py-32 px-36 rounded-3xl  bg-green-600">
      <h1 className="text-xl text-black font-bold  ">box-1</h1>
    </div>
    <div className="py-32 px-36 rounded-3xl  bg-red-600">
    <h1 className="text-xl text-black font-bold ">box-2</h1>
    </div>
    <div className="py-32  px-36 rounded-3xl bg-blue-600">
    <h1 className="text-xl  text-black font-bold ">box-3</h1>
    </div>
    <br />
</div>
<div className="flex border-4 border-green-500 py-8 justify-evenly bg-slate-600 "> 
  <div className="py-32 px-36 rounded-3xl  bg-cyan-600">box-4</div>
  <div className="py-32 px-36 rounded-3xl  bg-purple-600">box-5</div>
  {/* yahan par ap orr flexbox ya card bna lyn.. */}
</div>
</>
  )
}