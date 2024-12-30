# Blog Website

A microservices-based blog website that enables users to create, view, update, and delete blog posts, along with secure authentication and seamless inter-service communication using Kafka.

## Features

- **Microservices Architecture**:
  - **Post Service**: Manages blog posts, including create, update, delete, and view functionalities.
  - **User Service**: Handles user registration, login, and authentication using JWT (JSON Web Tokens).
- **Service Communication**:
  - Utilizes **Kafka** for asynchronous communication between microservices, such as handling user login events and post updates.


## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Event Streaming**: Apache Kafka
- **Authentication**: JWT (JSON Web Tokens)
- **Others**: Redis, Docker 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-website.git
   cd blog-website
