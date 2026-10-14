import { useState } from "react"
const Task3 = () => {

    const [product,setProduct]=useState({

     name: "Laptop",
     price: 45000,
     stock: 10
    });
    
    const update = ()=>{
        setProduct({...product,price:50000})
    }
    const addBrand= ()=>{
      setProduct(prev =>({...prev,Brand:"Dell"}));
    };

  return (
    <>
    <h1>Task3</h1>
    <p>{product.name}</p>
    <p>{product.price}</p>
    <p>{product.stock}</p>
    <p>Brand:{product.Brand || "Not added"}</p>

    <button onClick={update} className="bg-blue-600">Update Price</button><br /><br />
    <button onClick={addBrand} className="bg-blue-600">Add Brand</button>

    </>
  )
}

export default Task3
