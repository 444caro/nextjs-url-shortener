# Next.js URL Shortener

This is a full-stack **URL shortener** application built with **Next.js 13 App Router**, **TypeScript**, **MongoDB**, and **styled-components**. It allows users to input long URLs, optionally define a custom alias, and receive a shortened, shareable link with server-side redirection.

---

## Features

- Custom alias support for shortened URLs
- URL validation before submission
- Uses server actions (`"use server"`) for backend logic
- MongoDB database integration via a reusable collection interface
- Clean, responsive UI built with styled-components

---

## Tech Stack

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [MongoDB](https://www.mongodb.com/)
- Server Actions for backend functionality (no API routes)
- Custom client/server separation using `"use client"` and `"use server"`

---

## How It Works

1. **User submits a long URL + optional custom alias**
2. URL is validated on the server via `fetch()`
3. If valid, it’s inserted into MongoDB (alias must be unique)
4. A shortened link is displayed like:
https://mp-5-omega-two.vercel.app/myalias
5. Visiting that alias will redirect the user to the original long URL using server-side redirect logic in `[alias]/page.tsx`

---
