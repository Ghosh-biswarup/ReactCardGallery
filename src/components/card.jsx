import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';


const Card = (props) => {

  return (
    <div className='mx-4 my-2 p-5 md:my-0.5mr-1.5'>
      <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
  <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
    <img class="w-full h-full object-cover cursor-pointer hover:opacity-85" src={props.image} alt="product-picture" />


  </div>
  <div class="p-6 text-center">
    <h4 class="mb-1 text-3xl font-semibold text-slate-900 cursor-pointer hover:underline opacity-85">
      {props.name}
    </h4>
    <p
      class="text-xl font-semibold text-slate-500 uppercase hover:underline">
      {props.special}
    </p>
    <p class="text-base text-slate-600 mt-5 font-medium ">
        {props.desc}
    </p>
  </div>
  <div class="flex justify-center p-3.5 gap-5">
      <p class="text-base text-slate-900 font-bold text-xl pt-1">
       $ {props.price}
    </p>
        <button class="min-w-35 flex flex-col  gap-1 items-center rounded-md bg-slate-800 py-2.5 px-1 border border-transparent text-center text-sm text-white transition-all shadow-md hover:text-base shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      <ShoppingCart />Add to Cart
    </button>
    <button class="min-w-32  flex flex-col items-center  gap-1 rounded-md bg-slate-800 py-2.5 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:text-base shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      <ShoppingBag />Buy Now
    </button>

  </div>
</div>
    </div>
  )
}

export default Card
