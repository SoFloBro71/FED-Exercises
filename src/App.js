import people from './data/People.json';
import PersonCard  from './componens/PersonCard';

const App = () => {
    console.log(people)

    const peopleInfo = people.results.map((person) => {
<<<<<<< HEAD
        return (
            <div key = {person.name.first}>
                <div>
                <img src={person.picture.medium}/>
                <h2>{person.name.first}</h2>
                <h3>{person.quote}</h3>
                </div>
            <hr/>
            
            </div>
        );
=======
    return <PersonCard key ={person.name.first}person={person}/>;
        
>>>>>>> 34f0f4d35054b9a556e1ca791cea9277383b69aa
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
