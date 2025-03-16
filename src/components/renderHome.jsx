import NavExampls from "./nav";
import SubComponent from "./subContent";
import '../App.css'

export default function Home(){
    return (
             <>
              <header>
                   <NavExampls/>
              </header>
              <SubComponent/>
             </>
    
    )
}