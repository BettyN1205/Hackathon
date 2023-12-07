import { useEffect } from "react";
import Compare from "../components/compare/compare";
import Celebrity from "../components/Celebrity/Celebrity";


const Resultpage = ({person}) => {

  useEffect(() => {
    // axios call 
    console.log(person)

  }, [])


  return (
    <>
    {/* <div>
      name: {person.name}
      value: {person.value}
      </div> */}
    <Compare person={person}/>
    <Celebrity gotName={person.name}/>
    </>
  );
};

export default Resultpage;
