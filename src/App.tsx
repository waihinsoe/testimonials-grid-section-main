import "./App.css";
import DanielProfile from "./components/DanielProfile";
import JeanetteProfile from "./components/JeanetteProfile";
import JonathanProfile from "./components/JonathanProfile";
import KiraProfile from "./components/KiraProfile";
import Layout from "./components/Layout";
import PatrickProfile from "./components/PatrickProfile";

function App() {
  return (
    <Layout>
      <DanielProfile />
      <JonathanProfile />
      <KiraProfile />
      <JeanetteProfile />
      <PatrickProfile />
    </Layout>
  );
}

export default App;
