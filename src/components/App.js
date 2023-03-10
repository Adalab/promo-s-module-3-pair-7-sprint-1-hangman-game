import { useState } from 'react';
import '../styles/App.scss';

function App() {

  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const handleClick = (ev) => {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors+1);
  }

  const handleChangeLastLetter = (ev) => {
    // ev.preventDefault();
    const inputLastLetter = ev.target.value;
    const regExp=/^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]*$/;
    const pattern = regExp.test(inputLastLetter);
  
    if (pattern){
      setLastLetter(inputLastLetter);
    } else {
      const letters=[...lastLetter];
      letters.push(inputLastLetter)
      setUserLetters(letters)
    }
  }

  const renderSolutionsLetters = () =>{
    const wordLetters = word.split('');
    return wordLetters.map((eachWordLetter, index) =>{
    if(userLetters.includes(eachWordLetter)){ 
      return <li key={index} className="letter">{eachWordLetter}</li>}
    else {return <li key={index} className="letter"></li>}
  })}


  return <div className="App">{
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionsLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input onChange={handleChangeLastLetter()}
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
            />
          </form>
        </section>
        <input type="button" onClick={handleClick} value="Incrementar"/>
        <section className={'dummy error-' + numberOfErrors}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
  </div>
  }</div>;
}

export default App;
