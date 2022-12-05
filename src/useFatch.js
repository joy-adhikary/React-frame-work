import {  useState } from "react";

const useFetch = () => {

  const [name, setName] = useState("joy");

  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "joy", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "joy", id: 3 },
  ]);

  const handleDelete = (id) => {
    let newBlog = blog.filter((blog) => blog.id !== id); // delete korbo mane oi id bad a sob id thakbe ajonno amn korlam .. jate sdu segula return korbe jegula oi id er songe milbe nah
    setBlog(newBlog); //ebar useState er value gula just update kore new value set kore dilam
  };

  return {name,blog,handleDelete:{handleDelete},setName}
};

export default useFetch;