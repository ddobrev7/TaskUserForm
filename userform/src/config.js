const config = {
    development: {
      timeoutInMiliseconds: 2000,
    }
  };
  
 const currentEnvironment = process.env.NODE_ENV || 'development';
  
 export default config[currentEnvironment];