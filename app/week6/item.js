

export default function Item ({ name, quantity, category }) {
    return (
        <li className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
            <h3 className="text-x1 font-bold">{name}</h3>
            <p className="text-x1 font-bold"> {quantity}</p>
            <p className="text-x1 font-bold"> {category}</p>
        </li> 
        
    );
}