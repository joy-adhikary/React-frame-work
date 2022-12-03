
const Nav = () => {
  return (
    <nav className="nav">
      <h1>Joy blogs</h1>
      <div className="link">
        <a href="/" style={{
            color :"white",
            backgroundColor:'#f1356d',
            borderRadius:'8px'
        }}>Home</a>
        <a href="/create" style={{
            color :"white",
            backgroundColor:"blue",
            borderRadius:'8px'
        }}> NewBlog</a>
      </div>
    </nav>
  );
};

export default Nav;
