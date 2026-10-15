import { useState } from "react"
const Task4 = () => {
    const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 15000, inStock: true }
]);
    const stockcheck = (id) => {
        setProducts(prev =>
            prev.map(e =>
                e.id === id
                ? { ...e, inStock: !e.inStock }
                : e
)
);
};




  return (
    <>
    <div className="p-20">
    <h2>Task4</h2>
    {products.map(e=> (
        <div key={e.id}>
            <h2>{e.name}</h2>
            <p>{e.price}</p>
            <p>{e.inStock?"InStock":"Out Of Stock"}</p>
            <button onClick={()=> stockcheck(e.id)} className="bg-red-400 rounded-2xl justify-center w-30">ToggleStock</button>

        </div>
    ))}
</div>
    
    </>
  )
}

export default Task4
