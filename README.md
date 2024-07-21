# Packform Test

This application is develop using `React + Typescript + Vite`.

### Installation

Install the dependencies and devDependencies and start the application.

```sh
cd packform-test
npm i
npm run dev
```

After that, you can access the application on browser with default URL `http://localhost:5173/`.

### Routes

There is only 2 routes are available. You can access this route use Sidebar.

| Plugin              | URL     |
| ------------------- | ------- |
| Portfolio Dashboard | /       |
| Assets Balance      | /assets |

### Feature

- **Auto Generate Value** - For every currency and point existed in this application is auto generated using random number
  - `Currency` = 1 - 100000000
  - `Point` = 1 - 10

- **Variants for Component/Styling** - Some components will support variant style for reuseable and maintain design system. Exampe:
  - `Badge` (Component)
  - `Button` (Component)
  - `Tab Menu` (Component)
  - `Color` (Styling)
  - `Text` (Styling)
  - `Layout` (Styling)

- **Tab Data** - Changing showed data based on what filter are active. Exampe:
  - `Portfolio Perfomance` (/) - Only change Currency and Point.
  - `Data Table Assets` (/assets) - Filter are worked in this section. You can filter data by Asset Class, Entity, and Brocker.

- **Dashboard Sidebar** - Interactive sidebar.

### Note

- Every assets like fonts and images will be stored in the public directory
- My assumtions about this app is dashboard user. So, I make UI for Desktop version by added Sidebar.(You can see more detail in `Design` section)

### Design

For Desktop version, I added new UI Design concept using Figma. You can see more detail [https://www.figma.com/design/Uw5QEsV8SndYQAP418EcZL/Packform-UI-Test?node-id=0-1&t=IFH5QHNlKgbLWvPr-1][figma]

- **Assumptions**
    - User Base: The design is intended for users familiar with standard dashboard applications.
    - Screen Size: The design is optimized for typical desktop resolutions (e.g., 1920x1080).
    - Interactivity: Basic interactive elements like buttons, collapsed, sidebar, tab menu.

- **Design Considerations**
    - Mobile-First Approach: The design begins with a focus on mobile devices to ensure a seamless experience on smaller screens. The layout and components are initially optimized for touch interaction and smaller display areas.
    - Responsive Design: The interface is designed to smoothly scale up from mobile to desktop. As the screen size increases, additional features and layout adjustments are introduced to take advantage of larger displays.
    - Familiarity with Dashboard Applications: The design leverages common patterns and conventions found in dashboard applications to enhance user familiarity and ease of use. This includes elements such as side navigation bars, data visualization components, and interactive widgets.
    - Consistent User Experience: Across all devices, the design maintains a consistent visual and interactive experience, providing users with intuitive navigation and clear content presentation.

[figma]: <https://www.figma.com/design/Uw5QEsV8SndYQAP418EcZL/Packform-UI-Test?node-id=0-1&t=IFH5QHNlKgbLWvPr-1>
