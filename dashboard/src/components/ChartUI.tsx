import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import useFetchData from '../functions/useFetchData';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export default function ChartUI() {
const weatherData = useFetchData();

    // 1. Manejo de estado de carga o error
    if (!weatherData) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                <CircularProgress />
                <Typography variant="body1" sx={{ ml: 2 }}>Cargando datos del clima...</Typography>
            </Box>
        );
    }

    // 2. Preparación de datos (Extraemos los arrays de la respuesta de la API)
    // El hook devuelve la estructura, accedemos a 'hourly'
    const times = weatherData.hourly.time.map((time) => 
        new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );
    const temperatures = weatherData.hourly.temperature_2m;
    const windSpeeds = weatherData.hourly.wind_speed_10m;
return (
        <>
            <Typography variant="h5" component="div" gutterBottom>
                Pronóstico por Hora (Temperatura vs Viento)
            </Typography>
            
            <LineChart
                height={300}
                series={[
                    { data: temperatures, label: 'Temperatura (°C)' },
                    { data: windSpeeds, label: 'Vel. Viento (km/h)' },
                ]}
                xAxis={[{ scaleType: 'point', data: times, label: 'Hora' }]}
            />
        </>
    );
}