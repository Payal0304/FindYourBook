import React from "react";
import "../Styles/cartPage.css"

function Car({item}){
    return (
        <>
          <div className="mt-4 my-3 p-3">
            <div className="card w-92 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
              <figure>
                <img src={item.image} alt="Books" />
              </figure>
              <div className="card-body">
              
                <p>{item.name}</p>
                <div className="card-actions justify-between"> </div>
                  <div >${item.price}</div>
                  <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white duration-200">
                    ADD TO CART
                  </div>
               
              </div>
            </div>
          </div>
        </>
      );
}
export default Car;