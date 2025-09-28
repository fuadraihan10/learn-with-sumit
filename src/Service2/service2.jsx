
import Title from "../components/Title";
import Text from "../components/Text";
import Icon1 from "./components/Icon1";
import Icon2 from "./components/Icon2";
import Icon3 from "./components/Icon3";
import Icon4 from "./components/Icon4";


// squares
function Square({ icon, title, texts }) {
    return (
        <div>
                {icon}
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{texts}</p>
        </div>
    );
}


// Anchor
function Anchor({ text }) {
    return (
        <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            <a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">{text}</a>
        </div>
    );
}

// components
function Service2() {
    return ( 
        <section className="bg-white dark:bg-gray-900">
            <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                {/* Leftttt-- */}
                <div className="col-span-2 mb-8">
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-500 mb-3 ">Trusted Worldwide</p>
                    <Title text="Trusted by over 600 million users and 10,000 teams" big={false} />
                    <Text children="Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers." />
                    <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        <Anchor text="Explore Legality Guide" />
                        <Anchor text="Visit the Trust Center" />
                    </div>
                </div>
                {/* -----Right___ */}
                <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">

                    <Square icon={<Icon1 />} 
                    title="99.99% uptime" 
                    texts="For Landwind, with zero maintenance downtime"/>

                    <Square icon={<Icon2 />}
                        title="600M+ Users"
                        texts="Trusted by over 600 milion users around the world" />

                    <Square icon={<Icon3 />} 
                    title="100+ countries" 
                    texts="Have used Landwind to create functional websites"/>

                    <Square icon={<Icon4 />}
                        title="5+ Million"
                        texts="Transactions per day" />

                </div>
            </div>
        </section>
     );
}

export default Service2;

