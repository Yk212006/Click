const { extendTheme, withDefaultColorScheme, withDefaultVariant } = require("@chakra-ui/react");

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#F7F7F5",
        100: "#EEE9E0",
        200: "#DCD0C0",
        300: "#C9B5A0",
        400: "#B59A80",
        500: "#1E7F3C", // Primary Deep Green
        600: "#1A6B32",
        700: "#155728",
        800: "#0F431E",
        900: "#0A2F14",
      },
      secondary: {
        500: "#7A2E3A", // Burgundy
      },
      luxury: {
        black: "#000000",
        green: "#1E7F3C",
        burgundy: "#7A2E3A",
        beige: "#F7F7F5",
        white: "#FFFFFF",
      },
    },
    fonts: {
      heading: "'Poppins', sans-serif",
      body: "'Inter', sans-serif",
    },
    styles: {
      global: {
        body: {
          bg: "#F7F7F5",
          color: "#000000",
        },
        a: {
          color: "#1E7F3C",
          _hover: {
            textDecoration: "underline",
          },
        },
      },
    },
    components: {
      Button: {
        defaultProps: {
          colorScheme: "brand",
        },
        variants: {
          solid: {
            bg: "#1E7F3C",
            color: "white",
            _hover: {
              bg: "#186B32",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            },
            _active: {
              bg: "#155728",
            },
          },
          outline: {
            borderColor: "#1E7F3C",
            color: "#1E7F3C",
            _hover: {
              bg: "#F7F7F5",
            },
          },
        },
      },
      Heading: {
        defaultProps: {
          color: "black",
        },
      },
      Text: {
        defaultProps: {
          color: "#333333",
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input"],
  })
);

export default theme;