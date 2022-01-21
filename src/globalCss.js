import { makeStyles } from "@material-ui/core";

export const useGlobalCss = makeStyles(() => ({
    BtnPrimary:{
        backgroundColor:"#294a64",
        color:"white",
        "&:hover": {
            backgroundColor: "#203752",
          },
      
    },
    BtnDanger:{
    backgroundColor:"#eb3333",
    color:"white",
    "&:hover": {
        backgroundColor: "#dd3333",
        },
    
    },
    BtnSuccess:{
        backgroundColor:"#28c800",
        color:"white",
        "&:hover": {
            backgroundColor: "#2ca60e",
            },
        
        },

    displayFlex:{
        display:"flex",
    },
    Btn_primary: {
        backgroundColor: "#586A88",
        color: "#fff",
        "&:hover": {
          backgroundColor: "rgb(53 72 102)",
        },
      },
  
  }));
  