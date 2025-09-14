---
title: "Catppuccin"
description: "Catppuccin"
startDate: "June 01 2023"
image: "/images/projects/placeholder-4.jpg"
link: "https://github.com/catppuccin/glazewm"
---

When I switched to using GlazeWM as my Windows alternative to i3WM, I immediately missed having consistent theming across my development environment. The Catppuccin color palette had become my go-to for maintaining visual consistency, but there wasn't a port available for GlazeWM at the time.

So I built one myself, along with themes for Zebar and YAML configurations. Using templating tools like Whiskers, Tera, and Just, I created maintainable theme ports that could adapt to the Catppuccin color variations.

The project became more interesting when GlazeWM underwent a major architectural shift from version 2.0 to 3.0, moving from YAML-based configuration to React and CSS. Rather than abandoning the project, I updated the entire repository and provided new examples to support the modern architecture. It's been a good lesson in maintaining open-source projects through major upstream changes.
