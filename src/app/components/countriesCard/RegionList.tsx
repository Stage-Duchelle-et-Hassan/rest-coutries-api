export const RegionList  = (props) =>{

    const continents = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
        
    return(
           <div className=" flex flex-col items-start mt-2 bg-primary-foreground  shadow-md rounded-sm absolute z-50 w-48 ">
                {continents.map((continent) => (
                    <button className="hover:bg-slate-600 hover:text-white w-full text-start pl-4 py-2 text-primary"
                        key={continent}
                        onClick={() => props.setSelectedRegion(continent === 'All' ? undefined : continent.toLowerCase())}
                    >
                        {continent}
                    </button>
                ))}
           </div>
       )
 }