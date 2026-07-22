# COMCOF Shop Mobile App

Expo SDK 54 + TypeScript app in `mobile-app/`. The SDK is pinned to match the Expo Go build published in the app stores; if a future `npx expo start` reports "Project is incompatible with this version of Expo Go", the project SDK is ahead of the store app and must be moved back (see Troubleshooting). Version 0.2 mirrors the web shop: hero, four category cards, the three
founding releases as Coming Soon placeholders with tasting notes and
detail pages, planned delivery rates, and a corporate band. Nothing is
priced or orderable; interest goes to the launch list by email. Brand
system throughout, with Cormorant Garamond and DM Sans loaded on device.

## Test on your phone today (free, no store accounts)

1. Install **Expo Go** from the Play Store (Android) or App Store (iOS).
2. On this computer:
   ```
   cd "D:\DANIEL\COMCOF GROUP\comcof-group-website\mobile-app"
   npx expo start
   ```
3. A QR code appears in the terminal. Phone and computer must be on the
   same Wi-Fi. Android: scan from inside Expo Go. iPhone: scan with the
   camera app.
4. The app loads live; edits to the code reload instantly.

If the same network is a problem, run `npx expo start --tunnel` instead
(works over the internet, slightly slower).

## Troubleshooting

**"Project is incompatible with this version of Expo Go"**: the project targets a
newer SDK than the Expo Go published in the app stores (npm `latest` runs ahead
of the store app). Move the project back to the store SDK:

```
cd mobile-app
npm pkg set dependencies.expo="~54.0.36"
npm install
npx expo install --fix
```

Then confirm the dev server manifest reports the matching runtime:

```
curl -s -H "expo-platform: android" http://127.0.0.1:8081/ | head -c 120
```

It must show `"runtimeVersion":"exposdk:54.0.0"` (or whichever SDK you pinned).

Also check `app.json` plugins: `expo install --fix` on a newer SDK can add
`expo-status-bar` to plugins, which does not exist as a config plugin on SDK 54
and stops the server with a PluginError. Plugins should be `["expo-font"]` only.

## Verification performed

- `npx tsc --noEmit`: clean.
- `npx expo export --platform android`: bundle builds (Hermes).
- Dev server manifest serves `exposdk:54.0.0` (matching Expo Go 54 on the
  founder device); JS bundle compiles and serves
  (HTTP 200, 4.8MB dev bundle) with app content present.

## Later: real installable builds

- Android APK for sharing outside the store: `eas build -p android --profile preview`
  (needs a free Expo account; no Google fee).
- Store publication (later, when funds allow): Google Play one-time $25,
  Apple $99/year. Bundle IDs are already set: `com.comcofgroup.shop`.

## Structure

- `App.tsx`: screens and navigation (state-based; expo-router arrives
  with the account/orders phase).
- `content.ts`: No. 1 content, mirrored from the web shop; replaced by
  the shared Supabase API when the backend goes live.
- `theme.ts`: brand tokens.
- `assets/`: icon, splash, and packaging render generated from the brand
  SVGs.
