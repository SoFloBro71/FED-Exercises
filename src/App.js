import people from './data/People.json';
import PersonCard  from './componens/PersonCard';

const App = () => {
    console.log(people)

    const peopleInfo = people.results.map((person) => {
    return <PersonCard key ={person.name.first}person={person}/>;
        
    });

    // people.results.forEach((person, index) => { console.log(person.quote) });

    return (
        <>
        <h1>People</h1>
        {peopleInfo}
        </>
// FRAGMENTS ARE TYPICALLY FOR DIVS UNLESS YOU DONT CARE 
    );
};

export default App;
