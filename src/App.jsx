import { useState } from 'react'
import './App.css'
import kittenImage from './assets/kitten.jpeg'
import catImage from './assets/cat.jpg'

function App() {
    const [count, setCount] = useState(0)
    const [negativeCount, setNegativeCount] = useState(100)

    const handleClick = () => {
        setCount(prev => prev + 1);
    };
    const handleNegativeClick = () => {
        setNegativeCount(prev => prev - 1);
    };
    return (
        <>
            <header>
                <h1>Welcome to the Funniest Website Ever!</h1>
                <h2>Seriously, prepare to laugh...</h2>
                <h3>But first, a small header!</h3>
            </header>

            <main>
                <section>
                    <p>Why don’t skeletons fight each other? They don’t have the guts!</p>
                    <p>Did you hear about the cheese factory that exploded in France? There was nothing left but de
                        Brie.</p>
                </section>

                <section>
                    <h4>Here’s a picture of a very serious cat:</h4>
                    <img src={kittenImage} alt="A very serious cat"/>
                </section>

                <section>
                    <h4>And a second very serious cat:</h4>
                    <img src={catImage} alt="A very serious cat"/>
                </section>

                <section>
                    <h5>Here’s a button that does... absolutely nothing important:</h5>
                    <button onClick={handleClick}>Click me! ({count} clicks)</button>
                </section>

                <section>
                    <h5>Same deal but inverted:</h5>
                    <button onClick={handleNegativeClick}>Click me! ({negativeCount} clicks)</button>
                </section>

                <section>
                    <h6>Now, let's fill out a very important form:</h6>
                    <form>
                        <label>
                            What's your favorite joke?
                            <input type="text" name="joke" placeholder="Type your joke here..."/>
                        </label>
                        <br/>
                        <label>
                            Rate this website (1-10):
                            <input type="number" name="rating" min="1" max="10"/>
                        </label>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Funniest Website Ever. All jokes reserved.</p>
            </footer>
        </>
    )
}

export default App
