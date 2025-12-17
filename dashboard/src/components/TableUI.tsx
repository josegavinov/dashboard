import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import useFetchData from '../functions/useFetchData';

// 1. CORREGIR ESTA DEFINICIÓN DE COLUMNAS
const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'time', // Antes era 'label', ahora debe coincidir con el dato
      headerName: 'Hora',
      width: 150,
   },
   {
      field: 'temperature', // Antes era 'value1'
      headerName: 'Temperatura (°C)',
      width: 150,
   },
   {
      field: 'windSpeed', // Antes era 'value2'
      headerName: 'Viento (km/h)',
      width: 150,
   },
   {
      field: 'resumen',
      headerName: 'Resumen',
      description: 'Resumen de condiciones',
      sortable: false,
      width: 250,
      // Actualizamos el valueGetter para usar los nuevos campos
      valueGetter: (_, row) => 
         `${row.time}: ${row.temperature}°C / ${row.windSpeed}km/h`,
   },
];

export default function TableUI() {
   const weatherData = useFetchData();

   // Si no hay datos, mostramos mensaje de carga
   if (!weatherData) return <Typography>Cargando datos...</Typography>;

   // 2. ASEGURAR QUE LAS FILAS TENGAN LAS MISMAS CLAVES QUE LAS COLUMNAS
   const rows = weatherData.hourly.time.map((time, index) => ({
      id: index,
      // Estas claves (time, temperature, windSpeed) deben coincidir con 'field' arriba
      time: new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temperature: weatherData.hourly.temperature_2m[index],
      windSpeed: weatherData.hourly.wind_speed_10m[index]
   }));

   return (
      <Box sx={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns} // Aquí se pasa la nueva definición
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 10,
                  },
               },
            }}
            pageSizeOptions={[5, 10]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}