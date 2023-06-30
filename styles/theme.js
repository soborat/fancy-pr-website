import { createTheme } from "@mui/material";
import { darken } from "@mui/system";

const palette = {
  main: "#ff0000",
  dark: "#1d1d1d",
  "color-gradient-start": "#ff0000",
  "color-gradient-stop": "#ff0000",
  link: "#8fa6d0",
  "link-hover": "#6da1ff",
};

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "56px",
      fontWeight: "bold",
      color: palette.dark,
    },
    h2: {
      fontSize: "50px",
      fontWeight: "bold",
      color: palette.dark,
      marginBottom: "24px",
    },
    h3: {
      fontSize: "46px",
      fontWeight: "bold",
      color: palette.dark,
      marginBottom: "24px",
    },
    h4: {
      fontSize: "30px",
      fontWeight: "bold",
      color: palette.dark,
    },
    h5: {
      fontSize: "28px",
      fontWeight: "bold",
      color: palette.dark,
      marginBottom: "8px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: "bold",
      color: palette.dark,
      marginBottom: "8px",
      marginTop: "16px",
    },
    body1: {
      fontSize: "21px",
      color: "#737373",
    },
    body2: {
      fontSize: "15px",
      color: "#737373",
    },
    div: {
      fontSize: "17px",
      color: "#737373",
    },
  },
  palette,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            backgroundImage: `linear-gradient(to right, ${palette["color-gradient-start"]}, 0px, ${palette["color-gradient-stop"]} 100%)`,
            backgroundColor: palette["color-gradient-stop"],
            color: "white",
            padding: "1.15em 2.5em",
            borderRadius: "500px",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "17px",
            "&:hover": {
              backgroundColor: darken(palette["color-gradient-stop"], 0.07),
              backgroundImage: "none",
            },
          },
        },
        {
          props: { variant: "reverse" },
          style: {
            color: palette["color-gradient-stop"],
            padding: "8px 24px",
            borderRadius: "500px",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "17px",
            border: "1px solid #ededed",
            "&:hover": {
              backgroundColor: darken(palette["color-gradient-stop"], 0.07),
              backgroundImage: "none",
              color: "white",
            },
          },
        },
        {
          props: { variant: "white" },
          style: {
            backgroundColor: "white",
            color: "black",
            padding: "1.15em 2.5em",
            borderRadius: "500px",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "17px",
            "&:hover": {
              backgroundColor: darken("#ffffff", 0.07),
            },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "60px",
          paddingBottom: "60px",
          "@media (max-width:600px)": {
            paddingBottom: "40px",
          },
        },
      },
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "main" },
          style: {
            color: palette.link,
            textDecoration: "none",
            fontSize: 17,
            "&:hover": {
              color: palette["link-hover"],
            },
          },
        },
        {
          props: { variant: "header" },
          style: {
            color: "#737373",
            textDecoration: "none",
            fontSize: 15,
            padding: "10px 15px",
            "&:hover": {
              color: palette["dark"],
            },
          },
        },
        {
          props: { variant: "footer" },
          style: {
            color: "#737373",
            textDecoration: "none",
            fontSize: 17,
            padding: "0",
            "&:hover": {
              color: palette["dark"],
            },
          },
        },
      ],
    },
  },
  // add styleOverrides for mobile devices
  styleOverrides: {
    "@media (max-width:600px)": {
      typography: {
        h1: {
          fontSize: "42px",
        },
        h2: {
          fontSize: "38px",
        },
        h3: {
          fontSize: "35px",
        },
        h4: {
          fontSize: "23px",
        },
        h5: {
          fontSize: "21px",
        },
        h6: {
          fontSize: "15px",
        },
      },
    },
  },
});

export default theme;
