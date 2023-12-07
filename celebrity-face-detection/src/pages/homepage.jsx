
import Head from "../components/header/header"
import InputForm from "../components/InputForm/InputForm";
const Homepage=({setPerson})=>{
    return (
        <>
         <Head/>
    <InputForm setPerson={setPerson}/>
        </>
    )
}

export default Homepage;