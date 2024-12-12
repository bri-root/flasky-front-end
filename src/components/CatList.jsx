// import { i } from 'vitest/dist/reporters-1evA5lom.js';
import Cat from './Cat';

const CatList = ({ catData }) => {
    const catComponents = catData.map((cat, i) => {
        return(
            <Cat 
            name={cat.name}
            personality= {cat.personality}
            color= {cat.color}
            caretaker= {cat.caretaker}
            key={i}
            />);
    });
    console.log(catComponents)
    return (
        <>
            <h2> Cat List </h2>
            <ul>
                {catComponents}
            </ul>

        </>
    );
};

export default CatList;