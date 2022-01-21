

 BottomNavigation:{
    padding:"16px 12px 8px",
  },

// footer
const [value, setValue] = React.useState(0);

// css
BottomNavigation:{
    padding:"16px 12px 8px",
  },

// paste after main div
<BottomNavigation
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
showLabels
className={classes.root}
>
 <Typography variant="p" color="initial" className={classes.BottomNavigation}> Copyright ©2021 Soori Technologies.</Typography>
{/* <BottomNavigationAction label="Copyright ©2021 Soori Technologies."/> */}
</BottomNavigation>



// pagination

// css
    PaginateTable: {
    padding:" 19px 0px 12px 0px",
    float:"right",
  }

// paste on bottom of table
<grid className={classes.PaginateTable}>
<Pagination count={10} />
</grid>

