# JNC_New


### Step 1: Open the Project in VS Code

1. Clone or download this repository.
2. Open the project folder in **VS Code**.

---

### Step 2: Setup & Run the Server

1. Open the integrated terminal in **VS Code**.
2. Navigate to the `server` directory:

   ```bash
   cd server
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file inside the `server` folder with the following content:

<details>
<summary><code>server/.env</code></summary>

```env
JWT_SECRET="your_jwt_secret"
NODE_ENV="development"

# Admin Credentials
SELLER_EMAIL="your_admin_email@example.com"
SELLER_PASSWORD="your_admin_password"

# MongoDB Setup
MONGODB_URI="your_mongodb_connection_string"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Stripe Setup
STRIPE_PUBLISHABLE_KEY="your_stripe_publishable_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
```
</details>

5. Start the server:

   ```bash
   npm run server
   ```

---

### Step 3: Setup & Run the Client

1. Open a new terminal and navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install client dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file inside the `client` folder with the following content:

<details>
<summary><code>client/.env</code></summary>

```env
VITE_CURRENCY="$"
VITE_BACKEND_URL="http://localhost:4000"
```
</details>

4. Start the client development server:

   ```bash
   npm run dev
   ```

---

