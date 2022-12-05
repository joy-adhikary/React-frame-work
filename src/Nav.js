import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
      <h1>Joy blogs</h1>
      <div className="link">
        <Link to="/" style={{
            color :"white",
            backgroundColor:'green',
            borderRadius:'8px'
        }}>Home</Link>
        <Link to="/create" style={{
            color :"white",
            backgroundColor:"blue",
            borderRadius:'8px'
        }}> NewBlog</Link>
      </div>
    </nav>
  );
};

export default Nav;
 
// <a href="/create">newBlog</a> eita dile dircet server theke ei page access korbe kintu amra react er link thke eita anty casshi 
// sei jonno a er jonno Like r href er jonno to mane <Like to="/create">newBlog</Link> use korbo 