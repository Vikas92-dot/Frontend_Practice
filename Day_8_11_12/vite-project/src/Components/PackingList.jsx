export default function PackingList(){
    function Item({name, isPacked}){
        // if(isPacked){
        //     return <li className="item">{name} ✅</li>;
        // }
        // else return <li className="item">{name}</li>;


        //  return <li className="item">{isPacked ? name + ' ✅' : name}  </li> 

        // return (
        //     <li className="item">
        //     {isPacked ? (
        //         <del>
        //         {name + ' ✅'}
        //         </del>
        //     ) : (
        //         name
        //     )}
        //     </li>
        // );

        return (
            <li className="item">
                {name} {isPacked && '✅'}
            </li>
            );
    }
    return<>
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true}  name="Space Suit"/>
                <Item isPacked={true}  name="Helmet with a golden leaf"/>
                <Item isPacked={false}  name="Photo of Tam"/>
        
            </ul>
        </section>
    </>
}