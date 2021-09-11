import './MessageStyled.sass'
import { useEffect, useState } from 'react'


const Message = () => {

    const [newMessageText, setNewMessageText] = useState("")

    const [newMessageAuth, setNewMessageAuth] = useState("")

    const [robotMessage, setRobotMessage] = useState("")

    const [messageList, setMessageList] = useState([{
        text: "",
        author: "",
        id:0,
        robot: ""
    }])

    const newMessage = {
        text: newMessageText,
        author: newMessageAuth,
        id: messageList.length,
        robot: ""
    }

    const changeAuth = (e) =>{ 
        setNewMessageAuth((prev) => prev = e.target.value)
    }

    const changeText = (e) =>{ 
        setNewMessageText((prev) => prev = e.target.value)
    }

    const changeMessageHandle = () =>{
        console.log(messageList);
        if(newMessage.text !== ""){
            setMessageList([...messageList,newMessage])
            setNewMessageAuth((prev) => prev = "")
            setNewMessageText((prev) => prev = "")
        } return
    }

    useEffect(()=>{
        setRobotMessage()
        const idxNumber = messageList.length

        const timer = setTimeout(() => {
            if(messageList.length > 2){
                if(messageList[idxNumber - 1].author === messageList[idxNumber - 2].author) {
                    setRobotMessage((prev) => prev = "How are you?")
                    console.log('time +');
                } else {
                    setRobotMessage((prev) => prev = "Hi, I am Robot")
                    console.log('time -');
                }
            } else {
                setRobotMessage((prev) => prev = "Hi, I am Robot")
                    console.log('time =');
            }
        }, 1500);
        return () => clearTimeout(timer);
    },[messageList])



    return (
        <>
            <form className="form-massage" >
                <label>
                Name:
                    <input type="text" name="auth" className="inputText" value={newMessageAuth} onChange={changeAuth} />
                    <br/>
                Message:
                    <input type="text" name="text" className="inputText" value={newMessageText} onChange={changeText} />
                </label>
            </form>
            <button type="submit" className="btn" onClick={changeMessageHandle} >Send</button>
            {/* <p>{newMessage.author}</p> */}
            {/* <p>{newMessage.text}</p> */}
            <div className="chat">
                {messageList.map((obj) => (
                    (obj.text !== "") ? <div key={obj.id}> <p>{obj.author}: "{obj.text}"</p> <p> Robot:"{obj.robot = robotMessage}" </p> </div> : ""
                ))}
            </div>
            {/* <p>{robotMessage}</p> */}
        </>
    )

};

export default Message;