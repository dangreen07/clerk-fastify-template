# Clerk Fastify Template

A template project integrating Clerk authentication with Fastify and Drizzle ORM for PostgreSQL databases.

## Features

- **Authentication**: Secure user authentication with [Clerk](https://clerk.dev/)
- **API Server**: Fast and low overhead web framework using [Fastify](https://www.fastify.io/)
- **Database**: PostgreSQL database with [Drizzle ORM](https://orm.drizzle.team/) and [Neon](https://neon.tech/) serverless Postgres

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database (or a Neon account)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dangreen07/clerk-fastify-template.git
   cd clerk-fastify-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.sample` to `.env`
   - Fill in your Clerk API keys and database URL

   ```
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL=your_postgres_database_url
   ```

### Database Setup

1. Run migrations to set up your database schema:
   ```bash
   npx drizzle-kit push
   ```

### Running the Server

Start the development server:
```
npm run dev
```