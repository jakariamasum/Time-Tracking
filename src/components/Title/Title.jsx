
const Title = ({subtitle,title}) => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 justify-center text-center">
                <p className="text-[#FF7425] font-bold">{subtitle}</p>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#232323]">{title}</h2>
            </div>
        </div>
    );
};

export default Title;