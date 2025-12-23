export default function Sidebar() {
    return (<div className="flex flex-col h-screen w-40">
        <h1 className="h-10 px-10 flex justify-center items-center shadow-md rounded-lg">Chats</h1>
        <ul className="flex-1 overflow-y-auto overflow-x-hidden break-words">
            <li className="px-1 py-1"> New chat</li>
            <li className="px-1 py-1"> Search chat</li>
            <li className="px-1 py-1"> Images</li>
            <li className="px-1 py-1"> Apps</li>
            <li className="px-1 py-1">GPTs</li>
            <li className="px-1 py-1">Projects</li>

            
        </ul>

    </div>);
}