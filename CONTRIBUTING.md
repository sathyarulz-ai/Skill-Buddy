# Contributing to Skill Buddy

Thanks for helping make a kinder, more useful skill-building experience for children and families.

## Before starting
- Search existing issues and open a discussion/issue for substantial work.
- Keep changes focused. Prefer small, reviewable pull requests.
- Never include real children's names, photos, logs, backups, or other private data in issues, screenshots, fixtures, or commits.

## Development
- Run `npm test` before submitting.
- Test at narrow phone width, tablet width, desktop width, keyboard-only navigation, and with `prefers-reduced-motion` enabled.
- For storage changes, test fresh install, migration from an existing profile, valid backup restore, malformed backup restore, and storage failure.
- For asynchronous features, test navigation/profile switching while a request is pending.
- Do not add analytics, trackers, new network calls, or AI providers without documenting data flow and privacy implications.
- Never commit secrets or API keys.

## Pull requests
Include: purpose, user impact, screenshots or a short recording for UI changes, testing performed, accessibility notes, and any privacy/security implications. Please describe limitations honestly rather than marking untested paths as verified.

## Design bar
Prefer clarity over decoration. Use motion to communicate state, not to keep the screen busy. Respect reduced-motion preferences. Every interactive control should have a visible focus state and a clear accessible name. Sound must be optional and user-initiated.
