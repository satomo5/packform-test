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

There is only 2 routes are available.

| Plugin              | URL     |
| ------------------- | ------- |
| Portfolio Dashboard | /       |
| Assets Balance      | /assets |

### Feature

- **Auto Generate Value** - For every currency and point existed in this application is auto generated using random number
  -- `Currency` = 1 - 100000000
  -- `Point` = 1 - 10

- **Variants for Component/Styling** - Some components will support variant style for reuseable and maintain design system. Exampe:
  -- `Badge` (Component)
  -- `Button` (Component)
  -- `Tab Menu` (Component)
  -- `Color` (Styling)
  -- `Text` (Styling)
  -- `Layout` (Styling)

- **Tab Data** - Changing showed data based on what filter are active. Exampe:
  -- `Portfolio Perfomance` (/) - Only change Currency and Point.
  -- `Data Table Assets` (/assets) - Filter are worked in this section. You can filter data by Asset Class, Entity, and Brocker.

### Note

- In this application, every button will be static and not directed to other route.
- Every assets like fonts and images will be stored in the public directory
