function throttle(func,limit){
    let inThrottle = false;

    return function (...args){
        if(!inThrottle){
            func.apply(this,args);
            inThrottle = true;

            setTimeout(()=>{
                inThrottle = false;
            },limit);
        }
    }
}
const Throttling=()=>{
    const handleClick=()=>{
        console.log("Button Clicked:",new Date().toLocaleTimeString());
    }
    const throttledClick = throttle(handleClick, 2000);
    return<>
        <h2>Throttling Example</h2>
        <button onClick={throttledClick}>Click me fast</button>
    </>
}
export default Throttling;