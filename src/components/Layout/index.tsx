import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
