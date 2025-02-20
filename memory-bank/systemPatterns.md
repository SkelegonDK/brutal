# System Patterns

**Project Name:** Manuelito.tech - Personal Portfolio Website

**Architecture:**

- Astro-based static site: Utilizes Astro's static site generation capabilities for performance and SEO.

**Component Structure:**

- Layout Components:
  - BaseHead: Manages metadata and head elements.
  - BaseNavigation: Provides site navigation.
  - BaseFooter: Displays footer content.
- Blog Components:
  - BlogList: Displays a list of blog posts.
  - BlogContent: Renders the content of a single blog post.
  - BlogSummaryCard: Displays a summary of a blog post.
- Home Components:
  - MobileSocials: Displays social media links for mobile devices.
- Generic Components:
  - SummaryCard: Displays a summary of a project or skill.

**Animation Patterns:**

- Sequential fade-in with cubic-bezier timing: Creates a smooth and engaging animation effect.

**Design System:**

- Neobrutalist UI components: Utilizes a minimalistic and functional design aesthetic.

**Content Management:**

- Markdown-based blog system: Uses Markdown files for easy content creation and management.

**Key Technical Decisions:**

- Using Astro for static site generation.
- Implementing CSS-based animations for performance.
- Utilizing Markdown for content management.

**Component Relationships:**

- Pages import layout components to define the overall structure.
- Layout components import other components to build specific sections.
- Blog components are used to display blog posts.
