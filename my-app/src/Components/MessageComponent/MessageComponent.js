import './module.style.sass'

const MessageComponent = ({ Message }) => {
    console.log('Message');
    return (
        <div className="message">
            {Message}
        </div >
    )
}

export { MessageComponent };