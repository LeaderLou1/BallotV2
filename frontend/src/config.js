const config = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://your-backend-domain.com" // Replace with your actual backend domain
      : "http://localhost:3000",
};

export default config;
