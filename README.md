# Insecure Route Parameter Handling in Express.js
This repository demonstrates a common vulnerability in Express.js applications: insecure handling of route parameters.  The `bug.js` file shows vulnerable code, while `bugSolution.js` provides a secure alternative.

**Vulnerability:**
The vulnerable code directly uses the route parameter (`req.params.id`) in a database query without proper validation or sanitization. This makes it vulnerable to SQL injection or other attacks if the parameter is manipulated by the user.

**Solution:**
The solution involves using parameterized queries or input validation to prevent injection attacks. It also demonstrates proper error handling to gracefully handle cases where the requested user is not found. 

This example highlights the importance of secure coding practices to prevent vulnerabilities in web applications.