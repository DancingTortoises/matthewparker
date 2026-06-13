# Run Locally

## Fast no-install preview

Use this when you just want to see the current website in a browser without installing Next.js dependencies:

```bash
cd /Users/jonahparker/Documents/Codex/2026-06-09/you-are-an-award-winning-web-2
python3 -m http.server 4182 --bind 127.0.0.1 --directory outputs/matthew-parker-am-brand-preview
```

Then open:

```text
http://127.0.0.1:4182
```

## Full Next.js app

Use this after Node.js with npm is available:

```bash
cd /Users/jonahparker/Documents/Codex/2026-06-09/you-are-an-award-winning-web-2/outputs/matthew-parker-am-brand
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Update workflow

After each website update, the static preview in `outputs/matthew-parker-am-brand-preview` should be updated too, so the no-install preview command remains usable.
