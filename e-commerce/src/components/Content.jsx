export default function Content(){
    return (<div className="flex flex-col">
      <header className="h-10 flex items-center px-4">
  {/* Left side */}
  <div className="font-bold flex items-center w-70">
    <h3>ChatGPT 5.3 ∨</h3>
  </div>

  {/* Right side */}
  <div className="flex items-center gap-4 ml-auto">
    <h3>Share</h3>
    <h3>Add people</h3>
    <h3>Personalize</h3>
  </div>
</header>


        <p className="flex-1 overflow-y-auto flex justify-center items-center"><p>Where should we begin?</p></p>

        <div className="flex shadow-md rounded-full items-center gap-3 px-4 py-3 mx-auto max-w-4xl">
        <button className="text-3xl">+</button>
        <input className="flex-1 h-10 outline-none focus:outline-none focus:ring-0
 px-3  " placeholder="Ask anything"/>
        </div>
    </div>)
}