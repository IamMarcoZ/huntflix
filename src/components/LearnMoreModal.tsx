import { useMediaQuery,useTheme,Grow, Avatar, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const LearnMoreModal = ({ selectedFilm,language, open, close }: any) => {
   const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClose = () => {
    close();
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionComponent={Grow}
      transitionDuration={700}
      fullScreen={fullScreen}
      fullWidth 
      maxWidth="md"
      
    >
      <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', justifyContent: 'center' }}>
        {selectedFilm?.originalTitle + " - " + selectedFilm.releaseYear}
      </DialogTitle>
      <DialogContent >
        <Grid size={12}>
          <div>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                alt={selectedFilm?.originalTitle}
                height={400}
                className='dark-bg'
                image={selectedFilm?.imageSet?.horizontalPoster?.w1440}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: 2, marginBottom: 2 }}>
                  {`Cast: ${selectedFilm?.cast}`}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {selectedFilm?.overview}
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                  {selectedFilm?.streamingOptions?.[language]?.map((option: any, idx: number) => {
                    return (
                      <Grid key={idx} size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
                        <ListItem sx={{ bgcolor: 'whitesmoke', marginTop: 2, maxWidth: 360, cursor: 'pointer' }} onClick={() => window.open(option?.link, '_blank')}>
                          <ListItemAvatar>
                            <Avatar sx={{ width: 55, height: 55, marginRight: 2 }}>
                              <img alt='provider' width={50} style={{ objectFit: "fill" }} src={option?.service?.imageSet?.lightThemeImage} />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={option?.service?.name + " " + option?.type} secondary={option?.price?.formatted || "Free"} />
                        </ListItem>
                      </Grid>
                    )
                  })}
                </Grid>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button size='large' color='warning' onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LearnMoreModal

