// Test Users
export const testUsers = {
  valid: {
    username: 'testuser@example.com',
    password: 'Test@1234',
  },
  invalid: {
    username: 'invalid@example.com',
    password: 'wrongpassword',
  },
  admin: {
    username: 'admin@example.com',
    password: 'Admin@1234',
  },
};

// Form Data
export const formData = {
  contact: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    message: 'This is a test message',
  },
  registration: {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    country: 'United States',
    city: 'New York',
  },
};

// API Test Data
export const apiEndpoints = {
  users: '/api/users',
  products: '/api/products',
  orders: '/api/orders',
};

// Test Configurations
export const testConfig = {
  timeout: {
    short: 5000,
    medium: 10000,
    long: 30000,
  },
  retries: {
    default: 2,
    flaky: 3,
  },
};
