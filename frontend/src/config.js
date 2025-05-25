const config = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://ballot-usa-backend.onrender.com" // This will be your Render URL
      : "http://localhost:3000",
};

export default config;
