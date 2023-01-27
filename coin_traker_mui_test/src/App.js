import { useEffect, useState } from "react";
import Item from "./components/Item";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {


  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response => response.json()))
      .then((json) => {
        setCoins(json)
        setLoading(false)
      })
  }, [])

  console.log(coins)
  return (
    <Container fixed sx={{ bgcolor: '#cfe8fc' }}>
      <Grid container >
        <Grid item xs={10}>
          The Coins!
        </Grid>
        {loading ?
          <Grid item xs={2}>"" </Grid> :
          <Grid item xs={2}> ({coins.length})</Grid>
        }
      </Grid>
      {loading ? <strong>...Loading</strong> : <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <Item

              name={coin.name}
              symbol={coin.symbol}
              price={coin.quotes.USD.price}
            />
          </li>
        ))}
      </ul>}

    </Container>
  );
}

export default App;
