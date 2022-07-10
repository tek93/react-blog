import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create =()=>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor ]= useState('');
    const [isPending, setIsPending] = useState(false)
    const history  = useHistory();

        


    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {

            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(blog)


        })
        .then (()=>{
            console.log('new blog addes');
            setIsPending(false)
            // history.go(-1);
            history.push('/');
        })
     
    }

    return (
        <div className="create">
            <h2>Add new BLog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title : </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body : </label>
                <textarea 
                type="text"
                required
                onChange={(e)=>setBody(e.target.value)}
                />
                <label>Blog author : </label>
                <select value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
              <option value="Mario">Mario</option>
              <option value="Yousi">Yousi</option>
              </select>
              {!isPending &&<button>Add blog</button>}
              {isPending &&<button disabled>Add blog...</button>}
             
              
            </form>

        </div>
    );
}
export default Create;