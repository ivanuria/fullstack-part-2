import { useRef } from "react"
const Notification = ({ message, type }) => {
    const lastMessage = useRef("")
    if (message === null || message === "") {
        return <div className={`notification -closed`}>{lastMessage.current}</div>
    }
    lastMessage.current = message
    return (        
        <div className={`notification -open ${type}`}>{message}</div>
    )
}

export default Notification