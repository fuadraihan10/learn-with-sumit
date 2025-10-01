function Row({head,items}) {
    return ( 
        <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{head}</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        {items.map((item)=>{
                            return (<Item item={item}/>)
                        })}
                    </ul>
                </div>
     );
}

export default Row;

function Item({item}) {
    return ( 
        <li className="mb-4">
                            <a href="#" className=" hover:underline">{item}</a>
                        </li>
     );
}

