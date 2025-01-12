import React, { useState } from 'react'

export default function Quiz() {

    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState("");

    const handleNext = (question, answer) => {
        setAnswers({ ...answers, [question]: answer });
        if (step < 3) {
            setStep(step + 1);
        } else {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const styles = {
            Modern: answers.q1 === "Living Room 1" && answers.q3 === "Functionality",
            Rustic: answers.q2 === "Wood",
            Minimalist: answers.q3 === "Aesthetics",
        };
        const matchedStyle = Object.keys(styles).find((style) => styles[style]) || "Eclectic";
        setResult(matchedStyle);
    };


    const styleImages = {
        Modern: "/img/23.jpg",
        Rustic: "/img/36.png",
        Minimalist: "/img/3.png",
        Eclectic: "/img/28.png",
    };

    return (
        <div className='sec6'>

            <div className="quiz-container">
                <h2>Discover Your Perfect Interior Design Style</h2>
                <p>Take our quiz to find your ideal style and transform your space!</p> <br />

                {result ? (
                    <div className="quiz-result">
                        <h3 className="result-heading">
                            Your Style Is: <span>{result}</span>
                        </h3>
                        <img
                            src={styleImages[result]}
                            alt={result}
                            className="result-image"
                            style={{ width: '300px', height: '200px', objectFit: 'cover', margin: '10px 0' }}
                        />
                        <p className="result-description">
                            {result === "Modern" && "You love clean, functional designs with a contemporary touch."}
                            {result === "Rustic" && "You enjoy natural materials and a warm, earthy feel in your spaces."}
                            {result === "Minimalist" && "You prefer simplicity, clean lines, and a clutter-free environment."}
                            {result === "Eclectic" && "Your style is unique and blends elements from various styles."}
                        </p>
                        <button className="quiz-btn" onClick={() => { setStep(1); setResult(""); }}>
                            Retake Quiz
                        </button>
                    </div>
                ) : (
                    <div className="quiz-step">

                        {step === 1 && (
                            <>
                                <h4>Question 1: Which living room design do you prefer?</h4>
                                <div className="quiz-options">
                                    <button onClick={() => handleNext("q1", "Living Room 1")}>
                                        <img src="/img/14.jpg" alt="Living Room 1" />
                                    </button>
                                    <button onClick={() => handleNext("q1", "Living Room 2")}>
                                        <img src="/img/30.jpg" alt="Living Room 2" />
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h4>Question 2: Which material appeals to you most?</h4>
                                <div className="quiz-options">
                                    <button onClick={() => handleNext("q2", "Wood")}>
                                        <p>Wood</p>
                                        <img src="/img/wood1.gif" alt="" className='quiz_icon' />
                                    </button>
                                    <button onClick={() => handleNext("q2", "Glass")}>
                                        <p>Glass</p>
                                        <img src="/img/glass.png" alt="" className='quiz_icon' />
                                    </button>
                                    <button onClick={() => handleNext("q2", "Metal")}>
                                        <p>Metal</p>
                                        <img src="/img/metal.gif" alt="" className='quiz_icon' />
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h4>Question 3: What do you value most in home design?</h4>
                                <div className="quiz-options">
                                    <button onClick={() => handleNext("q3", "Functionality")}>Functionality</button>
                                    <button onClick={() => handleNext("q3", "Aesthetics")}>Aesthetics</button>
                                    <button onClick={() => handleNext("q3", "Comfort")}>Comfort</button>
                                </div>
                            </>
                        )}

                    </div>
                )}
            </div>



        </div>
    )
}
