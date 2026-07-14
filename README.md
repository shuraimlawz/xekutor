# React + Vite

## Contact form backend

The contact form now posts submissions to a local Express API that stores them in PostgreSQL.

### Prerequisites
- PostgreSQL running locally (for example via XAMPP/WAMP, or a standalone PostgreSQL server)
- A database named `portfolio`

### Environment
Create a `.env` file with either PostgreSQL or MySQL settings:

```env
PORT=5000
DB_TYPE=postgres
DATABASE_URL=postgres://postgres:postgres@localhost:5432/portfolio
```

For XAMPP/WAMP MySQL:

```env
PORT=5000
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=portfolio
```

### Run locally

```bash
npm install
npm run db:init
npm run server
```

In a second terminal:

```bash
npm run dev
```

The frontend will proxy `/api` requests to the backend on port 5000.
