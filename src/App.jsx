import Header from "./Header"
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  return (
    <>
      <Card />
      <Card />
      <Button />
      <Student name="Nadika" age={"30"} isStudent={true} />
      <Student name="Callum" age={"30"} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Steve" />
    </>

  );


}

export default App
