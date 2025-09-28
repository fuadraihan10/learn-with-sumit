function Title({ text , big ,center}) {
    if (center == undefined) {
        center = false;
    }

    if (big == undefined) {
        big = true;
    }

    if (big) {
    return ( 
        <>
            <h1 className={` max-w-2xl mb-4 text-4xl ${center ? "text-center" : ""} font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white`}>{text}</h1>
        </>
     );
    }

    return (
        <>
            <h1 className={`mb-4 text-3xl font-extrabold ${center ? "text-center" : ""}  tracking-tight text-gray-900 dark:text-white`}>{text}</h1>
        </>
    );
}

export default Title;