let products = [
    {
      id: 1,
      img: "img1.avif",
      title: "Gaming Headphone 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
      price: 3999,
      off: 20,
    },
    {
      id: 2,
      img: "img2.jpg",
      title: "Gaming Headphone 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
      price: 4500,
      off: 80,
    },
    {
      id: 3,
      img: "img3.jpg",
      title: "Gaming Headphone 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
      price: 2500,
      off: 11,
    },
    {
      id: 4,
      img: "img4.avif",
      title: "Gaming Headphone 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
      price: 1500,
      off: 60,
    },
    {
      id: 5,
      img: "img4.avif",
      title: "Gaming Headphone 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
      price: 1000,
      off: 30,
    },
  ];


  const cartItems=JSON.parse(localStorage.getItem("data")) ||[];
   const cartTbody=document.getElementById('cart');
    function renderCartItems(){
      CartTbody.innerHTML='';
      cartItems.forEach((cartItem,index) =>{
        const product=products.find(product =>product.id==cartItem.id);
        if(products){
          const row=document.createElement('tr');
          const discountprice=(product.price*(product.off/100)) /100;
          const totalprice=(product.price - discountprice)*cartItem.quantity;
          row.innerHTML =`
          `
        }
      })
    }