import './style.css'


const FirstComponent = ({ firstProps, secondProps }) => {
    console.log(firstProps, 'first props');
    return (
        <div className={firstProps ? "first" : "second"}>
            {secondProps}
        </div >
    )
}

export default FirstComponent;