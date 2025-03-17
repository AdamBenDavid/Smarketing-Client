const handleLogin = async (credentials: LoginCredentials) => {
  try {
    const response = await loginUser(credentials.email, credentials.password);
    if (response.user && response.token) {
      login(response.user, response.token);
    } else {
      console.error('Login response missing user or token:', response);
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
}; 