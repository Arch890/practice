import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { CenterFocusStrong } from '@material-ui/icons';



const useStyles = makeStyles({
  BakSkeleton: {
    backgroundColor:"#f0f8ff"
  },
  Logo_img:{
    display:"block",
    marginLeft:"auto",
    marginRight:"auto",
    width:25,
  },
  profile_img:{
    display:"block",
    marginLeft:"auto",
    marginRight:"auto",
    width:90,
  },
  TextCenter:{
    textAlign:'center',
  }
});

export default function SekeletonDash() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2} >
          <div className={classes.Logo_img}>
           <Skeleton variant="circle" width={70} height={70} />
          </div>
           <Grid container spacing={1}>
              <Grid item xs={1}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={11}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={1}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={11}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={1}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={11}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={1}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
              <Grid item xs={11}>
                <Skeleton animation="wave" height={50}/>
              </Grid>
           </Grid>
        </Grid>
        <Grid item xs={10} >
           <Skeleton animation="wave" height={90} style={{marginTop:-22}}  />
           <grid className="tableBody_skeleton">
              <Grid container spacing={1} className={classes.BakSkeleton}>
                <Grid item xs={5}>
                  <Grid container spacing={1}>
                    <Grid item md={12}>
                      <div className={classes.profile_img}>
                        <Skeleton variant="circle" width={95} height={95} style={{marginTop:0}} />
                      </div>
                    </Grid>
                    <Grid item xs={12} className={classes.TextCenter}>
                      <Skeleton animation="wave" height={40} width={"90%"} style={{margin:"0 auto"}}/>
                    </Grid>
                    <Grid item xs={12} className={classes.TextCenter}>
                      <Skeleton animation="wave" height={40} width={"80%"} style={{margin:"0 auto"}}/>
                    </Grid>
                      <Grid item xs={12}>
                        <Skeleton animation="wave" height={40} width={100}  style={{margin:"0 auto"}}/>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={7}>
                  <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} ></Skeleton>
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={3}>
                        <Skeleton animation="wave" height={40} />
                      </Grid>
                      <Grid item xs={12}>
                        <Skeleton animation="wave" height={40} width={100}  style={{margin:"0 auto"}}/>
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
          </grid>
        </Grid>
      </Grid>
    </div>
  );
}
