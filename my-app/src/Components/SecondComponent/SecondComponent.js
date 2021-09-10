
const FirstComponent = ({ obj }) => {
    return (
        <div style={{
            color: 'blue'
        }} >
            {obj.text} === {obj.number}
        </div >
    )
}

export default FirstComponent;