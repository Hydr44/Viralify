# Clerk Setup Instructions

## 🔐 Setup Clerk Authentication

Per completare l'integrazione di Clerk, segui questi passaggi:

### 1. Crea un account Clerk
1. Vai su https://clerk.com
2. Crea un account o fai login
3. Clicca su "Add application"

### 2. Configura l'applicazione
- **Application name**: SnappClip
- **Sign-in options**: Email, Google, GitHub (opzionale)
- **Environment**: Development (per ora)

### 3. Ottieni le chiavi API
Dopo aver creato l'app, copia le chiavi API:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

### 4. Aggiungi le chiavi al file `.env.local`
Apri il file `.env.local` e sostituisci le righe vuote con le tue chiavi:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

### 5. Configura i redirect URLs
Nel dashboard di Clerk, vai su:
- **Configure** → **Paths**
- Imposta:
  - Sign-in URL: `/sign-in`
  - Sign-up URL: `/sign-up`
  - After sign-in URL: `/dashboard`
  - After sign-up URL: `/dashboard`

### 6. Testa l'autenticazione
1. Avvia il server: `npm run dev`
2. Vai su http://localhost:3000
3. Clicca su "Launch App" - dovresti essere reindirizzato a `/sign-in`
4. Crea un account di test

## ✅ Fatto!
Una volta completati questi passaggi, l'autenticazione Clerk sarà attiva!
