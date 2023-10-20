import { useState, useRef } from "react";

const SlotMachine = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const animationRef = useRef<null | ReturnType<typeof setTimeout>>(null);

    const handleClick = () => {
        console.log('clicked');
        //reset animation
        setIsAnimating(true);

        animationRef.current = setTimeout(() => {
            setIsAnimating(false);
        }, 3000);
    }


    return (<>
        <div className='SlotScreen'>
            <div className="Gradient"></div>
            <div className="strokes"></div>
            <div className="contents">
                <div className="headings">
                    <h1>* CASH PRIZE *</h1>
                </div>
                <div className="money">
                    <span >$</span>


                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>012345678901234</span></span>
                    <span className='decor'>,</span>
                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>012345678901234567890123456789012345678901234567890123456789012345</span></span>
                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456</span></span>
                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890</span></span>
                    <span className='decor'>,</span>
                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890</span></span>
                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890</span></span>
                    <span className='animate'><span className={`num ${isAnimating ? 'please' : ''}`}>0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890</span></span>

                </div>
            </div>

        </div>
        <button className="redo" onClick={handleClick}>click me</button>
    </>
    )
}

export default SlotMachine