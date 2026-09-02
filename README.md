# CosmicTutoring

CosmicTutoring is a static website for the CosmicTutoring nonprofit, a student-led initiative focused on making education more accessible through free tutoring, student mentorship, and academic enrichment opportunities.

## Project Overview

This website is the public-facing hub for the organization and includes:

- A **home page** describing the mission, classes offered, and seminar opportunities
- An **applications page** with links for students/parents, tutors, and leadership applicants
- A **board page** introducing key team members
- A **registration steps page** walking families through onboarding
- Links to social channels and attendance forms

## Tech Stack

This project is built as a static front-end site using:

- HTML
- CSS
- JavaScript (with jQuery)
- External UI libraries loaded via CDN (Font Awesome, Slick Carousel, Cloud Carousel)

No backend server or package manager setup is required to view the site locally.

## Local Development

### Option 1: Open directly in your browser
1. Navigate to `/home/runner/work/CosmicTutoring/CosmicTutoring/CosmicTutoring/`
2. Open `index.html` in your browser

### Option 2: Serve with a local static server (recommended)
From the repository root:

```bash
cd /home/runner/work/CosmicTutoring/CosmicTutoring/CosmicTutoring
python3 -m http.server 8000
```

Then visit: `http://localhost:8000/index.html`

## Repository Structure

```text
CosmicTutoring/
├── README.md
└── CosmicTutoring/
    ├── index.html          # Landing page
    ├── application.html    # Applications and role sign-up entry point
    ├── board.html          # Board of directors profiles
    ├── steps.html          # Registration workflow for families
    ├── *.css               # Page and shared styling
    ├── nav.js              # Shared navigation interactions
    └── image assets        # Photos and visual content used by pages
```

## Content and Purpose

The site highlights the organization’s core priorities:

- Free tutoring across multiple subjects
- Volunteer leadership and service opportunities for high school students
- College prep and STEM-focused seminar initiatives
- Educational equity and community impact

## Contributing

If you are contributing updates:

1. Keep changes consistent with the existing HTML/CSS/JS structure
2. Test all modified pages in a browser
3. Verify navigation links and external form URLs
4. Ensure visual layout remains responsive across common screen sizes
