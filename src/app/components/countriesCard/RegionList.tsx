interface RegionListType {
    setSelectedRegion: (region: string | undefined) => void;
    setShowRegionList: (show: boolean) => void;
    setChangeFilterButtonName: (name: string) => void;
}
export const RegionList  = (props  : RegionListType) =>{
 

    const continents = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    
    const removeRegionList = (continent : string )=>{
        props.setSelectedRegion(continent === 'All' ? undefined : continent.toLowerCase())
        props.setShowRegionList(false)
        props.setChangeFilterButtonName(continent)
    }
        
    return(
           <div className=" flex flex-col items-start mt-2 bg-primary-foreground  shadow-md rounded-sm absolute z-50 w-48 ">
                {continents.map((continent) => (
                    <button className="hover:bg-slate-600 hover:text-white w-full text-start pl-4 py-2 text-primary"
                        key={continent}
                        onClick={()=> removeRegionList(continent)}
                    >
                        {continent}
                    </button>
                ))}
           </div>
       )
 }

 