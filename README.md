# Skill Buddy

**Little steps. Big skills.** Skill Buddy is a playful, local-first skill-practice companion for children and families. Children can explore a skill, record small wins, and reflect on progress; families can keep multiple child profiles on one shared device.

> Status: community prototype. Please test carefully before using it with children or treating it as a secure account system.

## Product principles

- **Human first:** clear language, calm hierarchy, forgiving interactions, and no shame-based progress.
- **Play with purpose:** joyful colour, expressive character motion, and celebration that supports the activity rather than competing with it.
- **Private by default:** core profile data stays in this browser unless a user explicitly exports it or invokes an optional AI feature.
- **Accessible by design:** keyboard focus, touch-friendly controls, reduced motion, readable contrast, and screen-reader feedback are ongoing requirements.
- **Small and maintainable:** no build step or framework is required for the current app.

## Run locally

Service workers and installability need HTTPS or `localhost`; opening `index.html` as `file://` is not a valid PWA test.

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080>. To run the lightweight syntax check (Node.js required):

```bash
npm test
```

## Deploy / install

Deploy the repository root as a static site over HTTPS (GitHub Pages works). Keep `index.html`, `manifest.webmanifest`, `sw.js`, `src/`, and `icons/` at the same relative paths. Supported browsers may offer an install prompt; iOS users can use Safari's Share menu → Add to Home Screen. Installability and prompts vary by browser.

## Project structure

```text
index.html                 App shell and metadata
src/styles.css             Design tokens, layout, motion, responsive rules
src/catalogue.js            Skill catalogue and shared static design data
src/app.js                 App state, rendering and interaction logic (legacy module, now separated)
sw.js                      Offline app-shell caching
manifest.webmanifest       PWA metadata and icon declarations
icons/                     Install icons
.github/                   Contribution issue templates and CI
```

The JavaScript is separated from markup and styling now, but it is still a large legacy module with shared global state and inline event handlers. Future contributions should extract coherent modules incrementally (data/schema, storage/migrations, UI rendering, avatar, sound, AI client) with tests at each boundary. Do not attempt a framework rewrite as the first step.

## Local data and child profiles

Profiles are stored in browser storage on this device and do not automatically sync. Profiles in a shared browser are not secure user accounts: another person with access to the app may be able to switch profiles or access exported data. Do not store sensitive information. Back up data before major updates.

Optional AI features may transmit prompt details to the configured AI provider. Review the in-app grown-ups/privacy explanation and provider terms before enabling AI for children. Do not commit API keys or private child data.

## Design direction

The visual direction combines restrained industrial-design clarity (few competing controls, legible hierarchy, purposeful feedback) with a warm, imaginative play world. Character animation should use named SVG groups and explicit emotion states; motion should have anticipation, overshoot, follow-through and secondary movement, with a reduced-motion alternative. Sound should be short, opt-in, non-startling and never autoplay before user interaction.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md). Start with a focused issue or discussion before a large change. For UI work, include screenshots at phone and tablet widths, keyboard notes, and reduced-motion behaviour.

## License

MIT — see [LICENSE](LICENSE).
