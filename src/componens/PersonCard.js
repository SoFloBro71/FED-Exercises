
const PersonCard = (props) => {

    return (    
    // <div key = {props.person.name.first}>
    //     <div>
    //         <img src={props.person.picture.medium} alt='' />
    //         <h2>{props.person.name.first}</h2>
    //         <h3>{props.person.quote}</h3>
    //     </div>
    // <hr/>

    // </div>

        <div className="card" style={{width: "18rem"}}>
            <img src={props.person.picture.large} className="card-img-top" alt='' />
                <div className="card-body">
                    <h5 className="card-title"> {props.person.name.first}</h5>
                <p className="card-text">{props.person.quote}</p>
            </div>
        </div>
    
    );
    

};

export default PersonCard;