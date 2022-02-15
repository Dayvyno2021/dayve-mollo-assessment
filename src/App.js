import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import Search from "./components/Search";
import LoadImages from "./components/LoadImages";
import { createApi } from "unsplash-js";
import ModalScreen from "./components/ModalScreen";
import ModalChildren from "./components/ModalChildren";


function App() {

  const [viewModal, setViewModal] = useState(false)
  let [largePhoto, setLargePhoto] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleModal = (e) =>{
    setLargePhoto(e.target)
    setViewModal(!viewModal)
  }
  
  const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "-_qONwc6cDdQn2M0dX0gF9cC4imoF77YRAHEGttFbao"
  });

  

  const onInputChange=(e)=>{
    setInputValue(e.target.value)
  }

  const [data, setPhotosResponse] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then(result => {
        const filter = result.response.results.filter(image=>{
          return image.user.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setPhotosResponse(filter);
        setLoading(false)
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [inputValue]);



  return (
    <Container className="">
      <Search inputValue={inputValue} onInputChange={onInputChange} loading={loading} />
      <LoadImages images={data} handleModal={handleModal} loading={loading} />
      {
        viewModal && 
        <ModalScreen className=''>
          <ModalChildren handleModal={handleModal} photo={largePhoto} />
        </ModalScreen>
      }
    </Container>
  );
}

export default App;
