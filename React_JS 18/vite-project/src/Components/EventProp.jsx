function EventProp(){
    const handleParentClick=()=>{
        alert("Parent div clicked");
    }
    return<>
        <div onClick={handleParentClick}>
            <button onClick={(e)=> 
                {
                    e.stopPropagation();
                    alert("Child button clicked..")
                }
            }>Child button</button>
        </div>
    </>
}
export default EventProp;