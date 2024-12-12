const Cat = ({name, personality, caretaker, color}) => {
    return(
        <li>
            <h3> Name: {name}</h3>
            <h3> Color: {color}</h3>
            <h3> Personality: {personality}</h3>
            <h3> Caretaker: {caretaker}</h3>
            <p>🐱</p>
            <button>Pet Cat</button>
        </li>
    );
};

export default Cat;