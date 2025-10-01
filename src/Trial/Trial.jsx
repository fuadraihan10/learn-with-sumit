import Title from "../components/Title";
import Text from "../components/Text";
import Btn from "../components/Btn";
function Trial() {
    return ( 
        <section class="bg-gray-50 dark:bg-gray-800">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div class="max-w-screen-sm mx-auto text-center">
                    <Title text="Start your free trial today" big={false}/>
                    <Text children="Try Landwind Platform for 30 days. No credit card required."/>
                    <Btn text="trial for 30 days"/>
                </div>
            </div>
        </section>
     );
}

export default Trial;