import people from './data/People.json';


const App = () => {
    console.log(people)

    const peopleInfo = people.results.map((person) => {
        return (
            <div key = {person.name.first}>
                <div>
                <img src={person.picture.medium} />
                <h2>{person.name.first}</h2>
                <h3>{person.quote}</h3>
                </div>
            <hr/>
            
            </div>
        );
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
