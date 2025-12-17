import { useEffect,useState } from "react";
import { type OpenMeteoResponse } from "../types/DashboardTypes";

const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  'Guayaquil': { latitude: -2.1962, longitude: -79.8862 },
    'Quito': { latitude: -0.1807, longitude: -78.4678 },
    'Manta': { latitude: -0.9470, longitude: -80.7080 },
    'Cuenca': { latitude: -2.9006, longitude: -79.0045 }
  
};

export default function useFetchData(selectedOption: string | null) : OpenMeteoResponse| undefined{ 
    //const URL  = 'https://api.open-meteo.com/v1/forecast?latitude=-2.1962&longitude=-79.8862&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m';
    const [data, setData] = useState<OpenMeteoResponse>();
    const cityConfig = selectedOption != null? CITY_COORDS[selectedOption] : CITY_COORDS["Guayaquil"];
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`;
    
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await fetch(URL);
                const jsonData:OpenMeteoResponse = await response.json();
                console.log("DATA:", jsonData);
                setData(jsonData);

            }catch(error){
                console.error("Error al obtener datos", error);
            }
        }
        fetchData();
    }, []);
    return data;
}