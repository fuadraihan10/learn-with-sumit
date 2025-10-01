import Question from "./Question";
import Ques1 from "./components/Ques1";
import Ques2 from "./components/Ques2";
import Ques3 from "./components/Ques3";
import Ques4 from "./components/Ques4";

function FAQ() {
    return ( 
        <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2
                class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                Frequently asked questions</h2>
            <div class="max-w-screen-md mx-auto">
                <div id="accordion-flush" data-accordion="collapse"
                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <Question isOpen={true} data={<Ques1 />} head={"Can I use Landwind in open-source projects?"}/>
                    <Question isOpen={true} data={<Ques2 />} head={"Is there a Figma file available?"}/>
                    <Question isOpen={true} data={<Ques3 />} head={"What are the differences between Landwind and Tailwind UI?"}/>
                    <Question isOpen={true} data={<Ques4 />} head={"What about browser support?"}/>

                </div>
            </div>
        </div>
    </section>
     );
}

export default FAQ;