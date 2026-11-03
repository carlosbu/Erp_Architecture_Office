# Setup guide (owner)

## 1. Supabase (database + login)
1. supabase.com → **Start your project** → sign in with GitHub.
2. **New project**: name `reforma-viveiro`, region **South America (São Paulo)**, save the DB password in a password manager.
3. **Authentication → URL Configuration**
   - Site URL: your Vercel URL (step 2), e.g. `https://reforma-viveiro.vercel.app`
   - Redirect URLs: add `https://reforma-viveiro.vercel.app/auth/callback` and `http://localhost:3000/auth/callback`
4. **Authentication → Users → Invite user**: invite yourself, then each family member.
   Only invited e-mails can log in.
5. **Project Settings → API Keys / Data API**: note the Project URL and the **publishable** key
   (never share the secret/service_role key).

## 2. Vercel (hosting)
1. vercel.com → **Sign up** with GitHub → plan **Hobby**.
2. **Add New → Project** → import `carlosbu/Erp_Architecture_Office` (allow access to the repo).
3. Before deploying, open **Environment Variables** and add:
   - `NEXT_PUBLIC_SUPABASE_URL` = Project URL
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` = publishable key
4. **Deploy**. If you add or change variables later, use **Redeploy**.

## 3. Check
Open the Vercel URL on your phone → you should see the login page →
enter your e-mail → open the link from the e-mail → home shows "Orçamento total R$ 500.000,00".

## Local development (optional)
```bash
cp .env.example .env.local   # fill in values
npm install
npm run dev                  # http://localhost:3000
npm test                     # unit tests
```
