import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import img from '../../assets/img/11329060.png'
import { ToastContainer, toast } from 'react-toastify';

function Hero(){
    const [url,setUrl] = useState("")
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [todo,setTodo] = useState([])
function success(){
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}
    function AddTodo(){
        if(url.trim() === "" || name.trim() === "" || price.trim() === ""){
alert(404)
        }
        else{
        
        
    let newToDo = {
        id :todo.length + 1,
        url: url,
        name: name,
        price:price,
        quanttiy: 1 ,
    }
let result = [...todo,newToDo]
setTodo(result)
localStorage.setItem("list",JSON.stringify(result))    
success()
    }
    setUrl("")
    setName("")
    setPrice("")}
    
    useEffect(() => {
        let get = JSON.parse(localStorage.getItem("list")) || []
        setTodo(get)
    },[])
    let total = todo.reduce((acc,el) => 
    acc + +el.price * el.quanttiy
    ,0)
    function delToDo(proId){
let res = JSON.parse(localStorage.getItem("list")) || []
res = res.filter((el,idx) => el.id !== proId)
localStorage.setItem("list",JSON.stringify(res))
setTodo(res)
    }
    function increment(proId){
let res = JSON.parse(localStorage.getItem("list")) || []
res = res.map((el) => el.id === proId ? {...el,quanttiy: el.quanttiy + 1} : el)
localStorage.setItem("list",JSON.stringify(res))
setTodo(res)
    }
    function decrement(proId){
        let res = JSON.parse(localStorage.getItem("list")) || []
        res = res.map((el) => el.id === proId ? {...el,quanttiy: el.quanttiy === 1 ? el.quanttiy : el.quanttiy - 1 }: el )
        localStorage.setItem("list",JSON.stringify(res))
        setTodo(res)
    }
    
  return(
       <div className="container">
        <div className="hero flex-items-center, justify-center, mt-10 ">
    <div class="relative max-w-xs mx-auto">
        <input type="text" 
        id="floating-phone-number"
        class="block py-2.5 ps-6 pe-0 w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none mt-[10px] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        placeholder="Product url... "
        onChange={(e) => setUrl(e.target.value)} 
        value={url}
        />
        <label for="floating-phone-number" 
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] mt-[10px] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Product url...</label>
    </div>
    <div class="relative max-w-xs mx-auto">
        <input type="text" 
        id="floating-phone-number" 
        class="block py-2.5 ps-6 pe-0 w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none mt-[10px] dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        placeholder="Product name... " 
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <label for="floating-phone-number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] mt-[10px] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Product name...</label>
    </div>
    <div class="relative max-w-xs mx-auto">
        <input type="text" 
        id="floating-phone-number" 
        class="block py-2.5 ps-6 pe-0 w-[400px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 mt-[10px] appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
        placeholder="Product price... " 
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        />
        <label for="floating-phone-number" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] mt-[10px] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Product price...</label>
    </div>
    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 mb-[30px] dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 " 
    onClick={() => AddTodo() }>Seve product</button>        

        </div>
{
    todo.length ? <div className="total w-[200px] , h-[50px]">
    <h1>Total ptice:{total}$</h1>
    </div> : null
}
<div className="relative overflow-x-auto shadow-md sm:rounded-lg, m-20">
    {todo.length ?<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                  Product
              </th>
              <th scope="col" className="px-6 py-3">
                  Qty
              </th>
              <th scope="col" className="px-6 py-3">
                  Price
              </th>
              <th scope="col" className="px-6 py-3">
                  Action
              </th>
          </tr>
      </thead>
      <tbody>
          {todo.map((el,idx) => (
            <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4">
             <Zoom>
             <img src={el.url} className="w-5 md:w-10 max-w-full max-h-full " alt="img"/>
             </Zoom>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
               {el.name}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-center">
                    <button 
                    onClick={() => decrement(el.id)}
                    className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                        </svg>
                    </button>
                   <h1>{el.quanttiy}</h1>
                    <button 
                    onClick={() => increment(el.id)}
                    className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {el.price * el.quanttiy}$
            </td>
            <td className="px-6 py-4">
                <button className="font-medium text-red-600 dark:text-red-500 hover:underline"
                onClick={() => delToDo(el.id)}>Remove</button>
            </td>
        </tr>
          ))}
       
      </tbody>
  </table> :
  <div className="img" >
<img src={img} alt="img" />
  </div>
}
<ToastContainer />

</div>

      </div>
     
  )
} 
 export default Hero;