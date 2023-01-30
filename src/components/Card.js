import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function ActionAreaCard(props) {
  return (
    <Grid item xs={4}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={props.data.avatar}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.data.first_name} {props.data.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.data.email}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Grid>
  );
}