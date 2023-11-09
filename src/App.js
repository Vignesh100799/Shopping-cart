
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";




function App() {
  

  // let handlecartcount = ()
  
 const [cartitem, setCartitem] = useState([]);
 const [total, setTotal] = useState(0);


  let handleAddtocart = (product) =>{
    if(!cartitem.some((obj)=>obj.id === product.id)){
   setCartitem ([...cartitem ,product])
   setTotal (total + product.newprice)
  }}  

  // const [remove, setRemove] = useState([cartitem])
  // const [dectotal, setDectotal] = useState(0)


  const handleRemoveitem = (item)=>{
    let itemIndex = cartitem.findIndex(obj=>obj.id === item.id)
    cartitem.splice(itemIndex,1)
    setCartitem([...cartitem])
    setTotal(total-item.newprice)
    // setRemove([...cartitem,item])
    // setDectotal(dectotal-item.newprice)
  }


  const products = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      id:"1",
      title: "Fancy Product",
      rating: false,
      newprice: 40

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      id:"2",
      title: "Special Item",
      rating: true,
      sale: "Sale",
      oldprice: "$20.00",
      newprice: 18
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      id:"3",
      rating: false,
      sale: "Sale",
      oldprice: "$50.00",
      newprice: 25

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      id:"4",
      newprice: 40

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      sale: "Sale",
      oldprice: "$50.00",
      id:"5",
      newprice: 25
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      id:"6",
      newprice: 120

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      sale: "Sale",
      oldprice: "$20.00",
      id:"7",
      newprice: 18
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      id:"8",
      newprice: 40
    }
  ]
  return (
    <>
    <Navbar
    
     handleRemoveitem={handleRemoveitem} 
     cartitem={cartitem} 
     handleAddtocart={handleAddtocart} 
     
     total = {total}/>
     
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product,index) => {
              return <Cart key={index} 
              handleAddtocart={handleAddtocart} 
              handleRemoveitem={handleRemoveitem}
              product={product} 
              cartitem={cartitem}/>
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App;
