import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './components/Posts';
import { Pagination } from './components/Pagination';
function App() {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);
useEffect(()=>{
  const fetchPosts = async ()=>{
    setLoading(true);
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
    setLoading(false);
  };
  fetchPosts();
},[])
function paginate(pageNumber){
  setCurrentPage(pageNumber);
}
//get array of posts for each page
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPostsArr = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts className="row"posts= {currentPostsArr} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
