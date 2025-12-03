import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';

import './App.css'

function App() {


  return (
      <Grid container spacing={5} justifyContent="center" alignItems="center">

         {/* Encabezado */}
         <Grid size = {12}>Elemento: Encabezado<HeaderUI/></Grid>
         

         {/* Alertas */}
         <Grid size={12}>Elemento: Alertas<AlertUI description="No se preveen lluvias"/></Grid>

         {/* Selector */}
         <Grid size={12}>Elemento: Selector</Grid>

         {/* Indicadores */}
         <Grid size={12}>Elemento: Indicadores</Grid>

         {/* Gráfico */}
         <Grid sx={{ display: { xs: "none", md: "block"} }} >Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid>Elemento: Información adicional</Grid>

      </Grid>
  );
}

export default App
