import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blog = props.blog;
  // const msg_from_home = props.title;
  const title_from_home = props.title2;
  const handleDelete = props.handleDelete;

  // here blog = props.blog contain same blog array form home.js page
  // msgfromhome contain msg , jeita dekhe bujhty parbo props kivabe kaj kore

  return (
    <div className="blog-list">
      <h2>{title_from_home}</h2>
      {/* printing list item through map and useState */}
      {/*  array.map(jekono_name => (jekono_name.property)) */}
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* key ita unique rakhty hobe karon pore jodi call kori tkn kaje dibe  */}
          <Link to={`/blog/${blog.id}`}>  {/* eita link theke nibe ajono json format a korty hoeb ` ` eitar majhe ${ } eita diye id ta dynamic kore dicce .. nahole eita akta string hoye jaito    */}
            <h2>Blog name {blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>Delete Me</button>
          {/* ei jaigai amra jehetu home.js er data use kortyci seijonno data amra edit korty parbo nah just view korty parbo , kintu amader to delete korty hobe .. sei jonno amra home.js er moddhe delete er funciotn likhbo thn oita ke invoke kore dibo ei jaiga theke as a props hisabe */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
