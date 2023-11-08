
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";



function App() {
  const [cartcount, setCount] = useState(0)
  const inc = () => {
    setCount(cartcount + 1)
  }

  const products = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      newprice: "$40.00 - $80.00"

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      sale: "Sale",
      oldprice: "$20.00",
      newprice: "  $18.00"
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      sale: "Sale",
      oldprice: "$50.00",
      newprice: "  $25.00"

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      newprice: "$40.00"

    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Sale Item",
      rating: false,
      sale: "Sale",
      oldprice: "$50.00",
      newprice: "  $25.00"
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Fancy Product",
      rating: false,
      newprice: "$120.00 - $280.00"
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Special Item",
      rating: true,
      sale: "Sale",
      oldprice: "$20.00",
      newprice: "  $18.00"
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      title: "Popular Item",
      rating: true,
      newprice: "$40.00"
    }
  ]
  return (
    <div>
      <Navbar Count={cartcount} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => {
              return <Cart addCart={inc} cart={product} />
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App;
