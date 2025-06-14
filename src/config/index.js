const config = {
  appName: "My Vue App",
  appVersion: "1.0.0",
  settings: {
    defaultLocale: "en",
    supportedLocales: [
      {
        code: "en",
        name: "English",
        flag: "🇬🇧",
      },
      {
        code: "fr",
        name: "Français",
        flag: "🇫🇷",
      },
    ],
    defaultTheme: "light",
  },
};

export { config as default, config };
