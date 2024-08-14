import './App.css';
import TenthStudent from './components/TenthStudent';
import SSCStudent from './classes/SSCStudent';


function App() {
  let prudhvi = new SSCStudent("Prudhvi","Male",15);
  let vamshi = new SSCStudent("Vamshi","Male",15);
  let shiva = new SSCStudent("Shiva","Male");
  let ram = new SSCStudent("Ram","Male",15);
  let raj = new SSCStudent();
  raj.name = "raj";
  raj.gender= "Male";
  raj.age =15;
  raj.calculateResult();
  ram.age=15;

  console.log(ram.age)

    return (
    <div className="App">
      <TenthStudent name="Prudhvi"/>
      <TenthStudent name="Vamshi"/>
      <TenthStudent name="Shiva"/>
      <TenthStudent name="Ram"/>
      <TenthStudent name="Raj"/>

    </div>
  );
}

export default App;