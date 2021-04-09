import React from 'react'
import './Weatherblock.css'
import Weatheritem from '../Weatheritem/Weatheritem'
import axios from 'axios'
import Loaded from '../isLoaded/isLoaded'
import WeatherLocationBlock from '../WeatherLocationBlock/WeatherLocationBlock'


const Weatherblock = React.memo( ({addNewWeather, addDelet}) => {
    const [loaded, setLoaded] = React.useState(false)
    const [weathere, setWeather] = React.useState()

    function handleLoaded(){
        setLoaded(!loaded)
    }

    React.useEffect(()=>{
        let geo = navigator.geolocation
        geo.getCurrentPosition(position => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac1d8d7c748ea7df6345148b4b2c3933`
        axios(api).then(({data}) => {
            setWeather(data)
            handleLoaded();
        })
      })
    },[])
    
    return (
        <div className='Weatherblock'>
            {
                !loaded 
                ? <Loaded/>
                : <WeatherLocationBlock items={weathere}/>
            }
            <div>
                {   
                    addNewWeather.map((_,index) => (
                        <Weatheritem 
                            onClickDelet={addDelet.bind(this,index)}
                            key={index}
                            items={addNewWeather[index]}
                        />
                    ))
                }
            </div>
        </div>
        
    )
}
)
export default Weatherblock
