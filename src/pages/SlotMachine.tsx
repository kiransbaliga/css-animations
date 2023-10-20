import { useState, useRef } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
const SlotMachine = () => {
    const [theme, setTheme] = useState('greentheme');
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
    const handletheme= (s:string) => {
        setTheme(s);
    }

    return (<>
        <div className={`SlotScreen ${theme}`}>
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
        <div className="buttongroup glass ">
            <div className="button-row">
                <button className="circle glass themer fa-regular fa-square" onClick={()=>{setTheme('greentheme')}}> </button>
                <button className="triangle glass themer fa-regular fa-circle"onClick={()=>{setTheme('bluetheme')}}></button>
                <button className="square glass themer fa-solid fa-sharp fa-play fa-rotate-270"onClick={()=>{setTheme('pinktheme')}}></button>
            </div>
            <button className="redo glass fa-solid fa-redo" onClick={handleClick}> </button>
        </div>
    </>
    )
}

export default SlotMachine