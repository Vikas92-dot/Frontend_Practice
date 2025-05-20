function Child({sendDataToParent}){
    const sendMessage=()=>{
        sendDataToParent('Hello from Child!');
    }
    return<>
            <h3>Child Component</h3>
            <button onClick={sendMessage}>Send Data to Parent</button>
    </>
}
export default Child;