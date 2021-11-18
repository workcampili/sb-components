export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: "white", value: "#ffffff", default: true },
      { name: "black", value: "#000000" },
      { name: "green", value: "#0e7209" },
      { name: "blue", value: "#0000ff" },
    ],
  },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}