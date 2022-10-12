import Header from "./components/header/Header";
import SetViewPortProvider from "./SetViewPortProvider";
import Section1 from "./pages/main/section1/Section1";
import Section2 from "./pages/main/section2/Section2";
import Section3 from "./pages/main/section3/Section3";
import Section4 from "./pages/main/section4/Section4";

function App() {
  return (
    <div className="App">
      <Header />
      <SetViewPortProvider component={Section1} />
      <SetViewPortProvider component={Section2} height={"70vh"} />
      <SetViewPortProvider component={Section3} />
      <SetViewPortProvider component={Section4} />
    </div>
  );
}

export default App;
