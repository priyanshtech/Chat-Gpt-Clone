export default function Content(){
    return (<div className="flex flex-col h-screen  bg-[#212121] w-full">
      <header className="h-10 flex items-center px-4">
  {/* Left side */}
  <div className="text-xl text-gray-200  flex items-center ">
    <h3>ChatGPT 5.3 ∨</h3>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-4 ml-auto">
    <h3 className="text-base">Share</h3>
    <h3 className="text-base">Add people</h3>
    <h3 className="text-base">Personalize</h3>
  </div>
</header>

<div className="flex-1 mx-20 flex flex-col  ">
        <div className="flex-1 mx-w-3xl overflow-y-auto   flex justify-center items-center text-base"><p className="mt-6 text-white">Where should we begin?
</p></div>

        <div className="w-full  flex shadow-md rounded-full items-center gap-3 px-4 py-3 mb-2   ">
        <button className="text-3xl">+</button>
        <input className="flex-1  h-10 outline-none  focus:outline-none focus:ring-0 text-base leading-relaxed font-normal
 px-3  " placeholder="Ask anything"/>
        </div>
        <div className="text-sm text-gray-400 flex justify-center">ChatGPT can make mistakes. Check important info. See Cookie Preferences.</div>
    </div></div>)
}