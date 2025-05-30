function Cards({ item, addToCart }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-80 h-[450px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col justify-between">
        <figure className="h-30 overflow-hidden flex items-center justify-center">
          <img src={item.image} alt="Books" className="object-contain h-full" />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title text-lg">
              {item.title}
              <div className="badge btn-custom">{item.category}</div>
            </h2>
            <p className="text-sm mt-1">{item.name}</p>
          </div>
          <div className="card-actions justify-between items-end mt-4">
            <div className="badge badge-outline">${item.price}</div>
            <div
              className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              onClick={() => addToCart(item)}
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
