export default function ShoppingList(){
    const Products = [
          { title: 'Cabbage', isFruit: false, id: 1 },
          { title: 'Garlic', isFruit: false, id: 2 },
          { title: 'Apple', isFruit: true, id: 3 },
        ];

    const listItems = Products.map(product=>(
      <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
        {product.title}
      </li>
    ))
    return<>
        <ul>{listItems}</ul>
    </>
}
