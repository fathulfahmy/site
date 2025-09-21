---
title: "Kintool"
description: "Kintool"
startDate: "August 01 2025"
image: "/images/projects/kintool.png"
link: "https://npmjs.com/package/kintool"
---

Working on Kintone JavaScript customizations at AsiaQuest taught me a lot about the challenges of maintaining multiple codebases. The platform's separation of desktop and mobile APIs meant I was constantly juggling two different implementations for the same functionality. On top of that, I found myself repeatedly importing separate packages for REST API clients and UI components across projects.

This friction led me to build Kintool, a unified JavaScript library that bridges these gaps. The library enables cross-platform development for Kintone customizations while providing an integrated UI component library and REST API client all in one package. Built with JavaScript and bundled using Rollup, the entire development and deployment process is automated through GitHub Actions.

The goal was simple, reduce the overhead of Kintone development and let developers focus on building features rather than managing multiple APIs and dependencies.
