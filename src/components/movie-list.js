import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Movie from './movie.js'


const MovieList=()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true);
    };

    const [keyword, setKeyword] = useState("");
    const [rateSearch, setrateSearch] = useState(1);
   
    const [movieList, setmovieList] = useState([
        {
          name: "Aladdin",
          pic: "https://www.movie-list.com/img/posters/big/zoom/aladdin.jpg",
          descrip: "When a street urchin finds a lamp with a genie inside, he uses the lamp to turn himself into a prince in order to win the heart of a beautiful princess. But an evil vizier is after the lamp too.",
          year:2019,
          rating: 3.95,
        },
        {
          name: "Dead in a Week: Or Your Money Back",
          pic: "https://www.movie-list.com/img/posters/big/zoom/deadinaweek.jpg",
          descrip: "When a street urchin finds a lamp with a genie inside, he uses the lamp to turn himself into a prince in order to win the heart of a beautiful princess. But an evil vizier is after the lamp too.After his ninth unsuccessful attempt on his own life, a young man outsources his suicide to an ageing assassin. If you're serious about ending it, you need professional help",
          year:2018,
          rating: 1.5,
        },
        {
          name: "Good Boys",
          pic: "https://www.movie-list.com/img/posters/big/zoom/goodboys.jpg",
          descrip: "Three sixth grade boys ditch school and embark on an epic journey while carrying accidentally stolen drugs, being hunted by teenage girls, and trying to make their way home in time for their first kissing party.",
          year:2019,
          rating: 4,
        }
    ])

    
    const [newMovie, setnewMovie] = useState({
        name: "",
        pic: "",
        descrip:"",
        year:0,
        rating: 0
      });

     

      const validateMovie = () => {
        setmovieList([...movieList, newMovie]);
        alert("movie added");
        handleClose();
        setnewMovie({ name: "", pic: "",descrip: "",year:0 ,rating: 0 });
      };
      const newMovieRatinOk = () => {
        newMovie.rating <= 5
          ? validateMovie()
          : alert("please insert a rate between 0 and 5");
      };

      const addMovie = () => {
        newMovie.name
          ? newMovie.pic
            ? newMovie.descrip
              ?newMovie.year
                ? newMovie.rating
                  ? newMovieRatinOk()
                  : alert("please insert a rating")
                :alert("please insert year")
              : alert("please insert a description")
            : alert("please insert a picture URL")
          : alert("please insert a name");
      };


      const handleChange = (e) => {
        setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
      };

    return(
        <React.Fragment>
            <div className="App" >
                <header>
                    <h1>Movie Database</h1>
                </header>
                <section className="searchbox-wrap">
                    <input 
                        type="text" 
                        placeholder="Search for a movie..." 
                        className="searchbox"
                        onChange={(e) => {
                            setKeyword(e.target.value);
                          }}
                    />
                    <Button variant="contained" style={{backgroundColor: 'brown'}} margin="normal" onClick={handleShow}>ADD +</Button>
		            </section>
                <Movie movieList={movieList.filter((el) =>
                    el.name.toUpperCase().includes(keyword.toUpperCase())
                )}  rateSearch={rateSearch}
               />
            </div>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="nameMovie" onChange={handleChange} name="name" placeholder="Name Movie"/>
                    <br/>
                    <input className="nameMovie" onChange={handleChange} name="pic" placeholder="Picture URL"/>
                    <br/>
                    <Form as="textarea" type="textarea" className="nameMovie" onChange={handleChange} name="descrip" rows="3" placeholder="Description" />
                    <br/>
                    <input className="nameMovie" onChange={handleChange} name="year" placeholder="Year"/>
                    <br/>
                    <input className="nameMovie" onChange={handleChange} name="rating" type="number" placeholder="Rating"/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addMovie}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default MovieList