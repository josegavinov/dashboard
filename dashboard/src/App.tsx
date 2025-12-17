import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './functions/useFetchData';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import './App.css'
import { useState } from 'react';

function App() {
    const dataFetcherOutput = useFetchData();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
      <Grid container spacing={5} justifyContent="center" alignItems="center">

         {/* Encabezado */}
         <Grid size = {12}>Elemento: Encabezado<HeaderUI/></Grid>
         

         {/* Alertas */}
         <Grid size={12}>Elemento: Alertas<AlertUI description="No se preveen lluvias"/></Grid>

         {/* Selector */}
         <Grid size={12}>Elemento: Selector<SelectorUI onOptionSelect={setSelectedOption} /></Grid>

         {/* Indicadores */}
<Grid container size={{ xs: 12, md: 9 }} >

                 <Grid size={{ xs: 12, md: 3 }}>
              {dataFetcherOutput && (
                        <IndicatorUI
                            title="Temperatura (2m)"
                            description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`}
                        />
                    )}
                     
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     {dataFetcherOutput && (
                        <IndicatorUI
                            title="Temperatura Aparente"
                            description={`${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`}
                        />
                    )}
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     {dataFetcherOutput && (
                        <IndicatorUI
                            title="Velocidad de Viento"
                            description={`${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`}
                        />
                    )}
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     {dataFetcherOutput && (
                        <IndicatorUI
                            title="Humedad Relativa"
                            description={`${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`}
                        />
                    )}
                 </Grid>
            
             </Grid>
         {/* Gráfico */}
         <Grid sx={{ display: { xs: "none", md: "block"} }} >Elemento: Gráfico</Grid>
            <ChartUI />
         {/* Tabla */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>
            <TableUI />
         {/* Información adicional */}
         <Grid>Elemento: Información adicional</Grid>

      </Grid>
  );
}

export default App
