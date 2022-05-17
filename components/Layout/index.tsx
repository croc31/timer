import { Footer } from "../Footer";
import {Header} from "../Header"

export function Layout(props){
    return(
        <>
        <Header></Header>
        {props.children}
        <Footer></Footer>
        </>
    );
}