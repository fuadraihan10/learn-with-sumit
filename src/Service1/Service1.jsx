
import Title from "../components/Title";
import Text from "../components/Text";


function Service1() {
    // service sectionnn
    return ( 
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                {/* sub-sectionnnnnn */}
                <Sub_service 
                Titles = "Work with tools you already use" 
                Items = {[
                    "Continuous integration and deployment",
                    "Development workflow",  
                    "Knowledge management"
                ]}
                image = "./assets/features/feature-1.png"
                />

                {/* sub-sectionnnnnn */}
                <Sub_service 
                Titles = "We invest in the world’s potential"
                Items = {[
                    "Dynamic reports and dashboards",
                    "Templates for everyone",
                    "Development workflow",
                    "Limitless business automation",
                    "Knowledge management"
                ]}
                image = "./assets/features/feature-2.png"
                reverse = {true}
                />
            </div>
        </section>
     );
}

export default Service1;


// sub_serviceee
function Sub_service({Titles, Items , image , reverse}) {

    if (reverse == undefined) {
        reverse = false;
    }
    return ( 
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className={`text-gray-500 sm:text-lg dark:text-gray-400 ${reverse ? 'order-2' : 'order-1'}`}>
                <Title text={Titles} big={false} />
                <Text children={"Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease"} />
                <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                    {Items.map((item, index) => (
                        <Item key={index} value={item} />
                    ))}
                </ul>
                <Text children={"Deliver great service experiences fast - without the complexity of traditional ITSM solutions."} />
            </div>
            <img className={`hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex ${reverse ? 'order-1' : 'order-2'}`} src={image} alt="dashboard feature image"></img>
        </div>
     );
}

function Item({ value }) {
    return ( 
        <>
            <li className="flex space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{value}</span>
                        </li>
        </>
     );
}