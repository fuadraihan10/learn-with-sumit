import Title from "../components/Title";

function Pricing() {
    return ( 
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                 <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <Title text="Designed for business teams like yours" big={false} />
                    <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Landwind we focus on
                    markets
                    where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <Cart title="Starter" info="Best option for personal use & for your next project." price="$29" dev="1" months="6"/>
                    <Cart title="Company" info="Relevant for multiple users, extended & premium support." price="$99" dev="10" months="24"/>
                    <Cart title="Enterprise" info="Best for large scale uses and extended functionality." price="$499" dev="100" months="36"/>
                </div>
            </div>
        </section>
     );
}

export default Pricing;


function Cart({title,info,price,dev,months}) {
    return ( 
                        <div
                    class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">{title}</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{info}</p>
                    <div class="flex items-baseline justify-center my-8">
                        <span class="mr-2 text-5xl font-extrabold">{price}</span>
                        <span class="text-gray-500 dark:text-gray-400">/month</span>
                    </div>

                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <Item value="Individual configuration"/>
                        <Item value="No setup, or hidden fees"/>
                        <Item value={<>Team size: <span className="font-semibold">{dev}  developer</span></>}/>
                        <Item value={<>Premium support: <span className="font-semibold">{months} months</span></>}/>
                        <Item value={<>Free updates: <span className="font-semibold">{months} months</span></>}/>
                    </ul>
                    <a href="#"
                        class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get
                        started</a>
                </div>
     );
}

function Item({ value }) {
    return ( 
        <li className="flex items-center space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" 
                fill="currentColor"
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd">
                </path>
            </svg>
            <span>{value}</span>
        </li>
    );
}

