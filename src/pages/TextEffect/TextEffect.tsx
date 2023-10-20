import './TextEffect.css'
const generateRandomString = (length:number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for(let i=0; i<length; i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

const handleMouseOver = () => {
    const text = generateRandomString(4500);
    const textbox = document.querySelector('.textEffect-textbox');
    textbox!.innerHTML = text;
}
const TextEffect = () => {

  return (
    <div className='textEffect-container' onMouseMove={handleMouseOver}>
        <div className="textEffect-textbox">
            Hover over me
        </div>
        <div className="overlay">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/d75cb597825683.5ece5294e5c5a.png" alt="" />
        </div>
    </div>
  )
}



export default TextEffect