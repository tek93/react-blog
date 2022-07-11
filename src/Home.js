
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error}  =useFetch('http://localhost:8000/blogs');

    

 

    return (
        <div className="home" >
            {error && <div>{error}</div>}
            {isPending && <div>Loadnig ...</div>}
            {blogs && <BlogList blogs={blogs} title={"All blogs"} />}

           



        </div>
    );
}
export default Home;
// coś tam 

//https://www.youtube.com/watch?v=XW0t2lk4Ffo&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=32