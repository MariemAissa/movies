import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import StarRatingComponent from 'react-star-rating-component';


const Movie=(props)=>{
  const [show, setShow] = useState(false);
  const [ll, setll]=useState([])
  const [imgg, setimg]=useState([])
  const [desc, setdesc]=useState([])
  const [year,setuear]=useState([])
  const [rating, setrating]=useState([])

  const handleClose = () => {
      setShow(false);
     
    };
  const handleShow = (e1) => {
      setShow(true);
      ll.push(e1.name);
      imgg.push(e1.pic);
      desc.push(e1.descrip);
      year.push(e1.year);
      rating.push(e1.rating);
      console.log(rating)

    };
   
     
    
    return(
        <React.Fragment>
            <section className="results" >
                {props.movieList.map((e1, i) => {
                        return(
                            <>
                                <div className="result" key={i} onClick={()=>handleShow(e1)}>
                                    <img src={e1.pic} />
                                    <h3>{e1.name}</h3>
                                </div> 
                            </>
                        );
                    })
                }
             </section>
            
             
             <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p> {ll}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row> 
                        <img src={imgg} style={{width:200}}/>
                        <p><b style={{color: 'brown'}}>Year:</b>{year}</p>
                        <br></br>
                       <div style={{marginLeft:-68,marginTop:20}}>
                           <b style={{color: 'brown'}}>Rating:</b>
                       <StarRatingComponent precision={0.5} value={rating} name={rating} style={{marginTop:50,marginLeft:-30  }}/>
                       </div>
                    </Row>
                   <p><b style={{color: 'brown'}}>Description:</b> {desc}</p>
                </Modal.Body>
             </Modal>
        </React.Fragment>

    );
}

export default Movie;