import React from 'react';
import './App.css';
import axios from 'axios'
import Header from './Components/Header/Header';
import Weatherblock from './Components/Weatherblock/Weatherblock';
import Popup from './Components/Popup/Popup';
import Button from './Components/Button/Button'

function App() {

    const [visiblePopUp, setPopUp] = React.useState(false)
    const [addCity, setAddCity] = React.useState([])
    const [newWeather, setNew] = React.useState([])
    const popUpRef = React.useRef();  

    function hendleVisiblePopup(){
        
        setPopUp(!visiblePopUp)
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(popUpRef.current)) {
            setPopUp(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
      }, []);
      
    function handleAddCity(city){
        setAddCity((prevCity) => [
            ...prevCity,
            {
                city
            }
        ])
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac1d8d7c748ea7df6345148b4b2c3933`
        axios(api).then(({data}) => {
            setNew((prevData) => [
                  ...prevData,
                  {
                    ...data
                  }
              ])
          })
    }

    const handleDeletWeather = (index) => {
        if (window.confirm('Вы действительно хотите удалить погоду?')){
            setNew((prevWeather)=>
            prevWeather.filter((_,curIndx)=>{
              if(index !== curIndx){
                return true
              }
              return false
            })
          )
        }
    }
    console.log(newWeather)
  return (
    <div className="Wrapper">
        <Header/>
        <div className="Content">
          <Weatherblock 
            addNewWeather={newWeather}
            addDelet={handleDeletWeather}
          />
          <Button onClick={hendleVisiblePopup}>
              Add
          </Button>
        </div>
        {
          visiblePopUp && 
          <Popup 
            popup={popUpRef} 
            onClickClose={hendleVisiblePopup} 
            onClickAdd={handleAddCity}
          />
        }
    </div>
  );
}

export default App;
