
const BlogList = (props) => {

const blog=props.blog;
const msg_from_home=props.title;
const title_from_home=props.title2;

// here blog = props.blog contain same blog array form home.js page 
// msgfromhome contain msg , jeita dekhe bujhty parbo props kivabe kaj kore 

 
    return (
 <div className="blog-list">  
    <h2>{title_from_home}</h2>  
      {/* printing list item through map and useState */}
      {/*  array.map(jekono_name => (jekono_name.property)) */}
      {
        blog.map(blog =>(
          <div className="blog-preview" key={blog.id}>
            {/* key ita unique rakhty hobe karon pore jodi call kori tkn kaje dibe  */}
          <h2>Blog name {blog.title}</h2>
          <p>Written by {blog.author}</p>
          </div>
        ))
      }
</div>
  );
};
 
export default BlogList;