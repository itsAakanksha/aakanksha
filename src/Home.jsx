import BlogList from './BlogList.jsx';
import { useState, useEffect } from 'react';



const Home = () => {
    const [blogs, setBlogs] = useState([]); 
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      fetch('http://localhost:8000/blogs') 
        .then(response => response.json())
        .then(data => {
          setBlogs(data); 
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(true); 
        });
    }, []);
  
    return (
      <div className="home">
        {loading && <div>Loading...</div>}
        {!loading && <BlogList blogs={blogs} />}
      </div>
    );
  };

  

// const Home = () => {
//     const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

//     return ( 
//         <div className="home">
//             {error && <div>{error}</div>}
//             {isPending && <div>Loading...</div>}
//             <BlogList blogs={blogs} title="All Blogs"/>
//         </div>
//      );
// }

export default Home;