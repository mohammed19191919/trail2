import React, { useEffect, useState } from 'react';
import "./foods.css";

//https://rainbowit.net/html/inbio/index-developer-white-version.html


import Images1 from "./images/image-baklava-desktop.jpg";
import Images2 from "./images/image-brownie-desktop.jpg";
import Images3 from "./images/image-cake-desktop.jpg";
import Images4 from "./images/image-creme-brulee-desktop.jpg";
import Images5 from "./images/image-macaron-desktop.jpg";
import Images6 from "./images/image-panna-cotta-desktop.jpg";
import Images7 from "./images/image-tiramisu-desktop.jpg";
import Images8 from "./images/image-waffle-desktop.jpg";
import Images9 from "./images/image-panna-cotta-tablet.jpg";
import Images10 from "./images/image-baklava-mobile.jpg";
import Images11 from "./images/image-baklava-tablet.jpg";
import Images12 from "./images/image-cake-mobile.jpg";
import Images13 from "./images/image-tiramisu-tablet.jpg";
import Images14 from "./images/image-tiramisu-tablet.jpg";
import Images15 from "./images/image-cake-tablet.jpg";


const foods = [
    { name: "ዳቦ", price: 20, image: Images1, color: "blue", taste: "sweet" },
    { name: "ማካሮኒ", price: 120, image: Images2, color: "green", taste: "strawberry" },
    { name: "እንቁላል ፍርፍር", price: 140, image: Images3, color: "white", taste: "vanilla" },
    { name: "ባቅላባ", price: 300, image: Images4, color: "red", taste: "sweet" },
    { name: "ሽሮ", price: 90, image: Images5, color: "gray", taste: "bitter" },
    { name: "ፓስታ", price: 100, image: Images6, color: "gray", taste: "bitter" },
    { name: "ፒዛ", price: 450, image: Images7, color: "gray", taste: "bitter" },
    { name: "በርገር", price: 400, image: Images8, color: "gray", taste: "bitter" },
    { name: "ስጋ ፍርፍር", price: 150, image: Images9, color: "gray", taste: "bitter" },
    { name: "በያይነት", price: 100, image: Images10, color: "gray", taste: "bitter" },
    { name: "ጥብስ", price: 150, image: Images11, color: "gray", taste: "bitter" },
    { name: "ቅቅል", price: 220, image: Images12, color: "gray", taste: "bitter" },
    { name: "ክትፎ", price: 200, image: Images13, color: "gray", taste: "bitter" },
    { name: "ብጥስጥስ", price: 140, image: Images14, color: "gray", taste: "bitter" },
    { name: "ላዛኛ", price: 500, image: Images15, color: "gray", taste: "bitter" },
];

function Food() {
    const [index, setIndex] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [lists, setLists] = useState([]);
    const [quantity, setquantity]=useState(0)

    const listOfFoods = foods[index];

    const newPrice = () => {
        setTotalPrice(prevPrice => prevPrice + listOfFoods.price);
        setCount(prevCount => prevCount + 1);
        setLists(prevLists => [...prevLists, listOfFoods]);
        setquantity(prevquantity => prevquantity + 1)
    };

    const confirmation = () => {
        alert("Thank you for your order. Your order arrives soon at your address.");
        setLists([]);
        setTotalPrice(0);
        setCount(0);
        setquantity(0);
    };
    const newdelete=(index)=>{
        if (count > 0 && lists.length - 1 > 0){
            const newlist=lists.filter((_, i) => i !== index)
        setLists(newlist)
        setCount(prevCount => prevCount - 1)
        setTotalPrice(prevPrice => prevPrice - listOfFoods.price)
    } else{
        setCount(0)
        setLists([])
        setTotalPrice(0)
        setIndex(0)

    }}
    // useEffect(()=>{
    //     let intervalId=null
    //     if (lists.length < 1) {
    //         intervalId= setInterval(()=>{
    //            setIndex (prevIndex => (prevIndex + 1) % foods.length)
    //         }, 2000)
    //         return() => clearInterval(index)
    //     } else{
    //         setIndex(0)
    //     }
    // }, [ index])

    return (
        <div className='wrapper'>
            <div className="headers">
            <h2>Good Afternoon, our respected clients.</h2>
            <h1>Welcome to <span className='mohammed'>Mohammed</span> and <span className='marta'>Marta</span> online Caffe</h1>
            <p>Dears, you feel free to order your delicious food. We will reach out to you within 15 minutes of your order.</p>
            </div>
               <div className="mainpart">
               <a href='#' className='items'> 
                <img src={listOfFoods.image} alt={listOfFoods.name} className='images'/>
                <h1>{listOfFoods.name}</h1>
                <p>የአንዱ ዋጋ: {listOfFoods.price} ETB</p>
                <p>ብዛት: {quantity}</p>
                <button className='buy-order' onClick={newPrice}>Order</button>
                <div>
            </div>
            </a>
            <div>
                <button 
                    onClick={() => setIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : foods.length - 1))}
                    className="previous">
                    Previous
                </button>
                <button 
                    onClick={() => setIndex(prevIndex => (prevIndex < foods.length - 1 ? prevIndex + 1 : 0))}
                    className='next' >
                    Next
                </button>
            </div>
               </div>
            
            <div className="atag">
            <a href='#' className='items'> 
                <img src={Images1} alt={listOfFoods.name} className='images'/>
                <h1>ዳቦ</h1>
                <p>Price: 20 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images1} alt={listOfFoods.name} className='images'/>
                <h1>ክትፎ</h1>
                <p>Price: 200 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images3} alt={listOfFoods.name} className='images'/>
                <h1>ማካሮኒ</h1>
                <p>Price: 120 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images4} alt={listOfFoods.name} className='images'/>
                <h1>እንቁላል ፍርፍር</h1>
                <p>Price: 140 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images5} alt={listOfFoods.name} className='images'/>
                <h1> ባቅላባ</h1>
                <p>Price: 300 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images6} alt={listOfFoods.name} className='images'/>
                <h1>ሽሮ</h1>
                <p>Price: 90 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images7} alt={listOfFoods.name} className='images'/>
                <h1>ፓስታ</h1>
                <p>Price: 100 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images8} alt={listOfFoods.name} className='images'/>
                <h1>ፒዛ</h1>
                <p>Price: 450 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images9} alt={listOfFoods.name} className='images'/>
                <h1>በርገር</h1>
                <p>Price: 400 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images10} alt={listOfFoods.name} className='images'/>
                <h1> ስጋ ፍርፍር </h1>
                <p>Price: 150 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images11} alt={listOfFoods.name} className='images'/>
                <h1> በያይነት</h1>
                <p>Price:  150 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images12} alt={listOfFoods.name} className='images'/>
                <h1>ቅቅል</h1>
                <p>Price: 220 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images13} alt={listOfFoods.name} className='images'/>
                <h1> ጥብስ </h1>
                <p>Price: 150 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images14} alt={listOfFoods.name} className='images'/>
                <h1> ብጥስጥስ </h1>
                <p>Price: 140 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            <a href='#' className='items'> 
                <img src={Images15} alt={listOfFoods.name} className='images'/>
                <h1> ላዛኛ </h1>
                <p>Price: 500 ETB</p>
                <div>
                <button className='buy-order' onClick={newPrice}>Order</button>
            </div>
            </a>
            </div>
            
            {lists.length > 0 && (
                <div className='orderplace'>
                    <h2>Number of orders: {count}</h2>
                    <ol>
                        {lists.map((list, index) => (
                            <li key={index}>{list.name} - {list.price} ETB
                            
                             <button className='delete' onClick={()=>newdelete(lists)}>x</button>
                            </li>
                        ))}
                    </ol>
                    <h3>Total price: {totalPrice} ETB</h3>
                    <h2>Payment methods</h2>
                    <select>  
                        <option value="bank">Bank</option>
                        <option value="paypal">PayPal</option>
                        <option value="telebirr">Tele Birr</option>
                    </select>
                    <button onClick={confirmation}>Confirm</button>
                </div>
            )}
        </div>
    );
}

export default Food;