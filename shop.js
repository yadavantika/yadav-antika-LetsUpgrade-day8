let products = [
  {
    id: 1,
    name: "Black Shirt",
    size: "L",
    color: "white",
    price: 400,
    image: "https://th.bing.com/th/id/OIP.mQjde0-OyiM5JOmYPTmFiQHaJT?w=148&h=198&c=7&o=5&dpr=1.5&pid=1.7",
    description: "Good looking Black tshirt",
  },
  {
    id: 2,
    name: "Checked Shirt",
    size: "M",
    color: "Black",
    price: 300,
    image: "https://th.bing.com/th/id/OIP.tTTYM5OE7ZBknIUqDMJX6AHaKs?w=143&h=206&c=7&o=5&dpr=1.5&pid=1.7",
    description: "Good looking Ckecked shirt",
  },

  {
    id: 3,
    name: "White Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "https://th.bing.com/th/id/OIP.TEKVhpkFHCZfOenmPj3TfwHaJ4?w=197&h=263&c=7&o=5&dpr=1.5&pid=1.7",
    description: "Good looking White Shirt",
  },

  {
    id: 4,
    name: "Black and White Jacket",
    size: "M",
    color: "Black and White",
    price: 500,
    image: "https://th.bing.com/th/id/OIP.qSXR62YutAJGe_T6oCCjhQHaJ4?w=161&h=215&c=7&o=5&dpr=1.5&pid=1.7",
    description: "Good looking Black and White Jacket",
  },

  {
    id: 5,
    name: "Blue Shirt",
    size: "S",
    color: "Blue",
    price: 400,
    image: "https://th.bing.com/th/id/OIP.IsEdO_ZcwcYRsb_TnZddGwHaLu?w=197&h=312&c=7&o=5&dpr=1.5&pid=1.7",
    description: "Good looking Blue Shirt",
  },

  {
      id: 6,
      name: "Wedding Suit",
      size: "M",
      color: "Gray",
      price: 2000,
      image: "https://th.bing.com/th/id/OIP.pnomo6qwINEm5lf-0wDhVQHaLk?w=197&h=307&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Good looking Wedding Suit",
    },
  
    {
      id: 7,
      name: "White Shirt",
      size: "M",
      color: "White",
      price: 1500,
      image: "https://th.bing.com/th/id/OIP._9qyd158aNAUWym0Ggf8WAHaHa?w=199&h=199&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Beautiful White Shirt",
    },
    {
      id: 8,
      name: "White T Shirt",
      size: "M",
      color: "White",
      price: 300,
      image: "https://th.bing.com/th/id/OIP.8fOJgnhskSd1cTVYplMN3wHaHa?w=197&h=197&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Beautiful White T Shirt",
    },

    {
      id: 9,
      name: "Leather Jacket",
      size: "M",
      color: "Brown",
      price: 600,
      image: "https://th.bing.com/th/id/OIP.BQMwwB55PbOjl5EPOK-5egHaLD?w=197&h=295&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Good looking Jacket",
    },

    {
      id: 10,
      name: "Long Dress",
      size: "M",
      color: "red",
      price: 900,
      image: "https://th.bing.com/th/id/OIP.2uvD-s77Vc9oujWwUH66QAHaLH?w=137&h=205&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Beatifull Long Dress",
    },
  
    {
      id: 11,
      name: "One Piece Black",
      size: "M",
      color: "Black",
      price: 550,
      image: "https://th.bing.com/th/id/OIP.L3Jd0mkPqmyJ8IaO-ZFC6ADIEs?w=134&h=201&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Beatiful One Piece",
    },

    {
      id: 12,
      name: "Plazzo Dress",
      size: "M",
      color: "White",
      price: 1500,
      image: "https://th.bing.com/th/id/OIP.lSKgapz5dFToOY0LBtmEfAHaNK?w=187&h=333&c=7&o=5&dpr=1.5&pid=1.7",
      description: "Beatifull Plazzo Dress",
    },
     
];

cart=[]

function displayProducts(productsData,who="productwrapper"){

    let productsString = "";

    if(who=="productwrapper"){

    productsData.forEach(function(product,index){
        
        let {id,name,image,color,description,price,size} = product;

    
        productsString += `<div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" >
        </div>
       <h3>${name}</h3>
       <p>Price : ${price}</p>
       <P>Size : ${size}</P>
       <P>Color : ${color}</P>
       <P>${description}</P>
       <p>
         <button onclick="addToCart(${id})">Add to Cart</button>
       </p>
     </div>`;
       
    });

   }
        
 else {

    productsData.forEach(function(product,index){
        
      let {id,name,image,color,description,price,size} = product; 
    
        productsString += `<div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" >
        </div>
       <h3>${name}</h3>
       <p>Price : ${price}</p>
       <P>Size : ${size}</P>
       <P>Color : ${color}</P>
       <P>${description}</P>
       <p>
        <button onclick="removeFromCart(${id})">Remove from Cart</button>
       </p>
     </div>`;       
    });

    productsString+=`<br><h3>Total Count : ${productsData.length}</h3></br>`

   }

 
    
    document.getElementById(who).innerHTML = productsString;

}


displayProducts(products);


function searchProduct(searchValue){
  

    let searchedProducts=products.filter(function(product, index){
        let searchString = product.name+" "+product.color+" "+product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
        
    });

    displayProducts(searchedProducts);
}

function getProductByID(productArray,id)
{
    return productArray.find(function(product){
        return product.id==id;
    })
}


function addToCart(id){
  let popUp=cart.filter(function(ele){
      return ele.id==id;
  })
  let pro=getProductByID(products,id);
  if(popUp.length==0)
  {
      cart.push(pro);
      displayProducts(cart,"cart"); 
  }
  else{
      alert("This product already exists in your cart");
  }
      
}


function removeFromCart(id){
    cart.splice(index, 1);

    displayProducts(cart,"cart")
}

function filter(){
  let min=document.getElementById("price1").value;
  let max=document.getElementById("price2").value;
  let filterResult=products.filter(function(ele){
      return ele.price>=min && ele.price<=max;
  });
  displayProducts(filterResult);
  document.getElementById("price1").value="";
  document.getElementById("price2").value="";
}
  
displayProducts(products)




