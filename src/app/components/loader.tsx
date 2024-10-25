export default function Loader (){
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-6 h-6 rounded-full bg-blue-500  animate-bounce [animation-delay:.3s]"></div>
          <div className="w-6 h-6 rounded-full bg-blue-500  animate-bounce [animation-delay:.7s]"></div>
        </div>
      );
}