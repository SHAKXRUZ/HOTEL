import Check from "./components/check/Check";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Room from "./components/room/Room";
import Device from "./components/device/Device";
import History from "./components/history/History";
import Customers from "./components/customers/Customers";
import Blog from "./components/blog/Blog";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Check />
      <Room />
      <Device />
      <History />
      <Customers />
      <Blog />
      <SignUp />
      <Footer />
    </>
  );
}
export default App;
