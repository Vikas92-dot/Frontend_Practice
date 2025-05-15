import { useState } from "react"
import ChatRoom from "./ChatRoom";

export default function MainChat(){
    const [roomId,setRoomId] = useState('general');
    const [show,setShow] = useState(false);

    return<>
        <label>
            Choose the chat room:{' '}
            <select value={roomId} onChange={e =>setRoomId(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
        </label>
        <button onClick={()=> setShow(!show)}>
            {show ? "close chat" : "open chat"}
        </button>
        {show && <hr/>} 
        {show && <ChatRoom roomId={roomId}/>}
    </>
}