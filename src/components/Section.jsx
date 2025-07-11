const Section = ({title, desc, isVisible, setVisible}) => {
    return(
        <div className="flex flex-col items-center gap-3 mb-7 border-amber-500 border-1 p-3 w-[70%]">
            <h1 className="text-2xl font-bold">{title}</h1>

            <button className="border text-sm p-1 cursor-pointer" onClick={() => setVisible()}>{isVisible ? "Hide" : "Show"}</button>

            {isVisible && <p className="text-sm">{desc}</p>}
        </div>
    )
}

export default Section;