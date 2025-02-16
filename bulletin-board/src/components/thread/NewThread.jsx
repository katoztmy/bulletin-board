import { useState } from "react"
import { Link } from "react-router-dom"

export const NewThread = () => {
    const [title, setTitle] = useState('');
    const handleInputTitle = (e) => {
        setTitle(e.target.value);
    }
    const createThread = async() => {
        await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title})
        })
        setTitle('')
    }
    return <>
        <div>
            <h1>スレッド新規作成</h1>
            <input type="text" placeholder="スレッドタイトル" value={title} onChange={handleInputTitle}/>
            <Link to="/">Topに戻る</Link>
            <button onClick={createThread}>作成</button>
        </div>
    </>
}