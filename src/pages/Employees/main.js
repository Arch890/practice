import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Profimage from "./Profimage.png";
import MainForm from "../../mainform";
const useStyles = makeStyles((theme) => ({}));

export default function MainLayout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container item spacing={2}>
        <Grid item md={4}>
          <Card>
            <CardHeader className="profile_blog"></CardHeader>
            <CardContent>
              <Grid container item spacing={2}>
                <Grid item md={12} className="profile_box">
                  <Grid class="avatar_md profile_user_wid">
                    <Avatar
                      alt="Cindy Baker"
                      className="img_thumbnail"
                      src={Profimage}
                    />
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <Grid className="details_profile">
                    <Typography className="name_profile">
                      Mr. Promit Rai
                    </Typography>
                    <Typography>Sales Manager</Typography>
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <Divider />
                  <Grid className="details_profile">
                    {/* <Button variant="outlined" className="BtnOutlinePrimary">
                      Update
                    </Button> */}
                    <Grid className="details_bottom_block">
                      <Typography>D.O.B: 2074-09-09</Typography>
                      <Typography>Email: email123@gmail.com</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item md={8}>
            <Card className="profile_right">
                <Grid className="img_position">
                    <Image src={bak}  className="img_box"></Image>
                </Grid> */}
        {/* <Typography variant="h5" color="initial">Welcome Back, Promit!!</Typography>
                <Typography variant="" color="initial">Welcome to the Eazycare! we are glad that you are visit this dashboard. we will be happy to help you grow your business.</Typography>
            </Card>
        </Grid> */}
        <Grid item md={8}>
          <Card>
            <div className="card__header">
              <Typography variant="h6" component="h6">
                Edit profile
              </Typography>
            </div>
            <Divider />
            <CardContent>
              <MainForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
