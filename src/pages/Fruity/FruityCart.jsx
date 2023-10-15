import { useSelector } from "react-redux";

export default function FruityCart() {
  const fruityCart = useSelector(state => state.fruitsCart)

  return (
    <div className='bg-slate-100 rounded'>
        <p className="text-2xl p-5 border-b border-slate-400">
            Your FruityCart
        </p>
        <ul>
          {fruityCart.cart.length > 0 &&
          fruityCart.cart.map(fruit => (
            <li
            className="px-5 py-2 text-xl"
            key={fruit.id}
            >
            <span className="front-semibold mr-2">
              {fruit.quantity}
            </span>
            <span>{fruit.name}</span>
            </li>
          ))}
          {fruityCart.cart.length === 0 && (
            <li className="px-5 py-3 text-xl">
              ... Grab one fruit !
            </li>
          )}
        </ul>
        <p className="text-xl p-5 border-t border-slate-400">
            Total price :
            {fruityCart.cart.length > 0 && (
              <span className="font-bold ml-2">
                {fruityCart.cart.reduce((acc, item) =>
                  item.price * item.quantity + acc, 0)}$
              </span>
            )}
        </p>
    </div>
  )
}
