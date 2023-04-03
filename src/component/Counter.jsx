import { useState } from 'react';
import '../component/Counter.css'

function Counter() {
    const [input, setInput] = useState({
        text: "",
        words: 0,
        characters: 0,
    });
    // const [words, setWords] = useState(0);
    // const [letters, setLetters] = useState(0);
    const handleInputChange = (e) => {
        const text = e.target.value;
        const words = text.split(" ").filter(word => word !== "").length
        const characters = text.split(" ").join("").length
        setInput({ text, words, characters });
    };
    // useEffect(() => {

    //     // setWords(wordsArr.length)

    //     // setLetters(LettersArr.length)
    // }, [input])

    // console.log("words", words);
    // console.log("letters", letters);

    return (
        <>
            <div>
                <div className='counter'>
                    <p> Words {input.words}</p>
                    <p> Characters {input.characters}</p>
                </div>
                <div className='paste'>
                    <textarea rows={27} cols={120} placeholder='Paste/Type your text here' type="text" value={input.text} onChange={(e) => handleInputChange(e)} />
                </div>

            </div>



        </>
    );
}

export default Counter;
