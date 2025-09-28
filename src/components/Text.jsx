function Text({ children }) {
    return (
        <p className={`max-w-2xl mb-6 align-middle font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 `}>
            {children}
        </p>
    );
}

export default Text;