import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from './components/Card';
import Grid from '@mui/material/Grid';
function App() {
  
  const [users, setUsers] = React.useState([]);
  const clickHandler = async() => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    const newUsers=data.data
    let dummyData=[]
    for(let i=0;i<newUsers.length;i++){
      dummyData.push(<Card data={newUsers[i]}  />)
    }
    setUsers(<h1 style={{marginRight:"400px"}}>Loading...</h1>)
    const waitForTwoSeconds =await new Promise((resolve) => {
      setTimeout(() => {
        resolve('2 seconds have passed');
      }, 2000);
    });
    setUsers(dummyData)

  }

 


  return (
    <div className="App" style={{overflow:'hidden'}} >
  
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountBoxIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            onClick={()=>clickHandler()}
            variant="h6"
            noWrap
            component="a"
        
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Get Users
          
          </Typography>

  
           
        
            

        </Toolbar>
      </Container>
    </AppBar>
      <header className="App-header">
      <Grid sx={{marginLeft:'300px'}} container spacing={5} alignItems="center" justifyContent="center" >
            {users}
      </Grid>
      </header>
      
    </div>
  );
}

export default App;
