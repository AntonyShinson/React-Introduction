import {CORE_CONCEPTS} from "./data.js";

const Index = ["Hello","Hi","Hlo"];
function genrand(max) {
  return Math.floor(Math.random() * (max+1));
}

function CoreConcept(props){
  return (<li>
    <img src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  );
}

function Header(){
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {Index[genrand(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <CoreConcept/>
      <main>
        <section id ="core-concepts">
          <h2>Core concept</h2>
          <ul>
          <CoreConcept description={CORE_CONCEPTS[0].description} title={CORE_CONCEPTS[0].title} image={CORE_CONCEPTS[0].image} />
          <CoreConcept description={CORE_CONCEPTS[1].description} title={CORE_CONCEPTS[1].title} image={CORE_CONCEPTS[1].image} />
          <CoreConcept description={CORE_CONCEPTS[2].description} title={CORE_CONCEPTS[2].title} image={CORE_CONCEPTS[2].image} />
          <CoreConcept description={CORE_CONCEPTS[3].description} title={CORE_CONCEPTS[3].title} image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <h2 class="head1">Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
