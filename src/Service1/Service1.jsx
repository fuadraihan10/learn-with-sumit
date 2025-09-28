
import Title from "../components/Title";
import Text from "../components/Text";
import Item from "../components/Item";


function Service1() {
    // service sectionnn
    return ( 
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                {/* sub-sectionnnnnn */}
                <Sub_service 
                Titles = "Work with tools you already use" 
                Texts = {["Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
                    ["Deliver great service experiences fast - without the complexity of traditional ITSM solutions."]
                ]}
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

