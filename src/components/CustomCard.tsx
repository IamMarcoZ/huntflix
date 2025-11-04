import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from '@mui/material'
import type { CustomCardPropsT } from '../types/globalTypes'
import {useState} from 'react'

const CustomCard = ({film,index,learnMore,shortOverview}:CustomCardPropsT) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageUrl = film?.imageSet?.horizontalPoster?.w1440;
    
  return (
    <div key={index}>
                <Card sx={{ minHeight: 350, maxHeight: 350, maxWidth: 300, minWidth: 300, display: 'flex', flexDirection: 'column', borderRadius: 5 }} >
                <CardMedia
                    component="img"
                    alt={film?.originalTitle}
                    height="160"
                    onLoad={()=>setImageLoaded(true)}
                    image={film?.imageSet?.horizontalPoster?.w1440}
                  />
                  
                  <CardContent sx={{ flex: 1, background: "#1D1F24", color: "white" }} className='fs-1r'>
                    <Typography gutterBottom variant="h6" sx={{ fontSize: "0.8rem" }} component="div">
                      {film?.originalTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', fontSize: "0.8rem", marginTop: 2 }} >
                      {shortOverview(film?.overview)}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ background: "#1D1F24", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button size="small" color='warning' onClick={() => learnMore(film)}>Learn More</Button>
                  </CardActions>
                </Card>
              </div>
  )
}

export default CustomCard