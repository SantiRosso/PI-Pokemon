import { useState } from "react"
import s from "./Comment.module.css"


const Comment = ({user, text, responses}) => {
    
    const [res, setRes] = useState(false)

    const handleClick = () => {
        setRes(!res)
    }
    
    return(
        <div>
            <h4>{user}</h4>
            <h6>{text}</h6>
            <div>
                <button onClick={handleClick} hidden={!responses && res === false}>ver respuestas...</button>
            </div>
            <div>
                <button onClick={handleClick} hidden={!responses && res === true}>ver respuestas...</button>
            </div>
            <div hidden={res}>
                {
                    responses?.map((e) => {
                        return(
                            <div>
                                <h1>{responses.user}</h1>
                                <h4>{responses.text}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Comment;