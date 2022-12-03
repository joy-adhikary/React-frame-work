
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  // const handleClike = (e) => {
  //   alert("clicked");
  //   console.log(e);
  // };

  //   const handleClikeAgain = (name, e) => {
  //     console.log("hello" + name, e.target);
  //   };

  // useState er use ta holo  jkn amra ei jaigai kono js value change kori seita html er majhe chng hobe nah .karom vertual dom , real dom er songe sudu map kore sei jaiga gula te
  // jei jaigai modify hoise so jonno eita runturn er age change thik e kore kintu html er majhe value chg kore nah
  // ajonno amra usestate use kori eita Reactive kore dae vlaue gula ke
  //syntax variable_name[initial_value,changed_value]=useState('initial_value')

  const [initial_value, setValue] = useState('joy adhikary');   //joy adhikary initial_value  
  const [age,setAge]=useState(55);

  //useState with array or list 
 //here it is array of object 

  const [blog,setBlog]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'joy', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'joy', id: 3 }
  ]);


  // const handleUseState = () => {
  //   setValue("joy");
  //   setAge(23);
  // };

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

     <BlogList blog={blog} title="eita home page theke pass hocche and Bloglist theke catch hocche " title2="All Blogs"/>
     {/* eita holo props er property . akn amr blog array ta roise ei page a kintu amr bloglist page au eita lagbe thats why ami eita ei jaiga theke dynamic vabe send kore dibo  */}
     <BlogList blog={blog.filter((blog) => blog.author ==='joy')} title2 ="Joys Blog Only"/>
    {/* ei filter method ta array er sob gula property er jonno akta callback function run korbe .. seita je je value gula condition a ture hobe se gula return korbe just  */}
    {/* default vabe e hoi eita .. jodi condition ture return kore tahole array te rakhbe or rakhbe nah .. eita akta new array create korbe  */}

    </div>
  );
};

export default Home;
