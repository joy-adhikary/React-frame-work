
import {  useEffect, useState } from "react";
import BlogList from "./BlogList";



const Home = () => {

  // const handleClike = (e) => {
  //   alert("clicked");
  //   console.log(e);
  // };

  //   const handleClikeAgain = (name, e) => {
  //     console.log("hello" + name, e.target);
  //   };
   
  // useState 2 ta jinish dei 1st ta hocche initial_value r 2nd ta hocche oi initial_vlaue change korar jonno akta function 

  // useState er use ta holo  jkn amra ei jaigai kono js value change kori seita html er majhe chng hobe nah .karom vertual dom , real dom er songe sudu map kore sei jaiga gula te
  // jei jaigai modify hoise so ei jonno eita return er age change thik e kore kintu html er majhe value chg kore nah
  // ajonno amra usestate use kori . eita Reactive kore dae vlaue gula ke

  //syntax variable_name[ initial_value , initial_value_change_korar_jonno_akta_funcition ] = useState('initial_value')

  // const [initial_value, setValue_function] = useState('joy adhikary');   //joy adhikary initial_value
  // const [age,setAge]=useState(55);
  const [name, setName] = useState("joy");

  //useState with array or list
  //here it is array of object

  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "joy", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "joy", id: 3 },
  ]);

  const handleDelete = (id) => {
    let newBlog = blog.filter((blog) => blog.id !== id); // delete korbo mane oi id bad a sob id thakbe ajonno amn korlam .. jate sdu segula return korbe jegula oi id er songe milbe nah
    setBlog(newBlog); //ebar useState er value gula just update kore new value set kore dilam
  };

  // const handleUseState = () => {
  //   setValue("joy");
  //   setAge(23);
  // };

  // useEffect Hook

  // useEffect code run korbe jkn e rander hobe . first a akbar code purata render hoi . then er por jekono state change hoilei abr render hoi oita .tkn abr run hoi useEffect
  // eita akta function type er mto .. just render hoilei ei function run kore . syntax holo useEffect( () => { } )
  // akn prob ashe akta doro amn code likhlam jeitar jonno code auto State change kortyce continueslly tahole state useEffect ke call dibe abr render hobe abr State change hobe mane akta loop a pore jabe
  // ajonnoi dependancy array banano hoi.. r ei array 2nd argument hisabe deya hoi . jodi empty array dei tahole UseEffect sudu matro 1st render ei run hobe baki time a hobe nah

  // useEffect(()=>{
  // console.log("useeffect run ");
  // },[]);

  // add some dependancy in the array . akn eita sudu matro name ta chage hoilei render korbe onno jkno state change hole rander hobe nah
  // akn ei useEffect function ta sdu matro name change hole render korbe
  useEffect(() => {
    console.log("value changed only for ", name);
  }, [name]);

  // https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17

  // eita ki korbe 1st jkn render hobe tkn amr blog empty thakbe mane null r ki . akn eita ei server theke data load korbe
  // useEffect(() => {
  //   fetch('http://localhost:8000/blogs')   // server theke data object akare load kortyce
  //     .then(res => {
  //       return res.json();      // eita ei object type data ke js type data te convirt kortyce
  //     })
  //     .then(data => {         // ei js array ke blog er modde set kore dibe
  //       setBlogs(data);
  //      setisloading(false); // Loading.... msg show korbe
  //     })
  //       .catch(err=>{
  // console.log(err.message)           // eita kono error paile console a print korbe
  // })
  // }, [])

  // const[isloading,setisloading]=useState(true);
  // eita dilam karon jkn bolg null thakbe tkn Loading... msg dekhabe

  return (
    <div className="home">
      {/* <p>HOME PAGE</p> */}

      {/* <button onClick={handleClike()}>Click Me</button>  ami jodi function er por () dei tahole call nah korlau run hobe funciton ta */}
      {/* <button onClick={handleClike}>Click Me</button> */}
      {/* <br></br> */}
      {/* ei vabe hanldeClike ke reference kore dicchi invoke korsi nah => jodi ( ) ditam tahole invoke kora hoito, jkn press korbo tkn e just function run korbe   */}

      {/* <button onClick={handleClikeAgain("joy")}>Click Me</button>   */}
      {/* akn handleClikeAgain("joy") jodi pass kori tahole run hobar songe songe execute hoye jabe mane invoke korbe kintu amke to perameter send korty o hobe  */}

      {/* ei jaiga gulate  anonymous function use kora jai jmn nicer eitar mto , jkn click korbe tkn ei function invoke hobe  */}
      {/* <button onClick={() => { handleClikeAgain("joy")}}>Click Me</button> */}

      {/* or event diye kora jai like  */}
      {/* <button
                onClick={(e) => {
                    handleClikeAgain("joy",e);
                }}
            >
                Click Me
            </button> */}

      {/* <p>Name is : {initial_value} and his age is {age} years old</p> */}
      {/* <button onClick={handleUseState}>Click Me</button> */}
      <button onClick={() => setName("joy adhikary")}>CLick me</button>
      <p>{name}</p>
      <BlogList blog={blog} title="eita home page theke pass hocche and Bloglist theke catch hocche " title2="All Blogs" handleDelete={handleDelete}/>
      {/* eita holo props er property . akn amr blog array ta roise ei page a kintu amr bloglist page au eita lagbe thats why ami eita ei jaiga theke dynamic vabe send kore dibo  */}
      <BlogList
        blog={blog.filter((blog) => blog.author === "joy")}
        title2="Joy's Blog Only"
        handleDelete={handleDelete}
      />
      {/* ei filter method ta array er sob gula property er jonno akta callback function run korbe .. seita je je value gula condition a ture hobe se gula return korbe just  */}
      {/* default vabe e hoi eita .. jodi condition ture return kore tahole array te rakhbe or rakhbe nah .. eita akta new array create korbe  */}
    </div>
  );
};


export default Home;


// custom hook

// custom hook a basically hoi ki je akta kaj jodi bar bar kora lage tahole oitake akta function type banai neya hoi
// then oitake just call deya hoi .
//hook er last a je je value gula useState a initial vlaue cilo oi gula export kora hoi as a array[ ] or obj { }

// custom hook ke ei vabe assign kora hoi home page a
// const { export type } = useState(perameter)

// normal hook ke ei vabe assign kora hoi home page a
// const [initial_value , function_For_change_initial_value ]  = useState(initital_value)


//const { a ,b } = array  eitar mane hocche eita array theke 1st 2 ta value ber kore nibe 
// const array = [ 1 ,2 ,3 ,4,5]
// const [a,b,c]=array 
// tahole a b c er value hobe amn  a=1 b=2 c=3 eitakei bole array destructering 





// // upr er kaj tai just akta custom hook diye kortyci 


// import useFetch from "./useFatch";
// const Home = () => {

//   const {blog,handleDelete:{handleDelete},name,setName}=useFetch() //just custom hook

//   useEffect(() => {
//     console.log("value changed only for ", name);
//   }, [name]);

//   return (

//     <div className="home">
     
//       <button onClick={() => setName("joy adhikary")}>CLick me</button>
//       <p>{name}</p>
//       <BlogList blog={blog} title="eita home page theke pass hocche and Bloglist theke catch hocche " title2="All Blogs" handleDelete={handleDelete}/>
//       <BlogList blog={blog.filter((blog) => blog.author === "joy")} title2="Joy's Blog Only" handleDelete={handleDelete}/>
//       </div>
//   );
// };

// export default Home;
