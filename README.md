# webpack‑template

A minimal and flexible boilerplate template configured for Webpack development. It includes essential tools to streamline building, bundling, and serving your web application.

## Features
- Modern Webpack setup with separate config files for development and production
- Live reloading via `webpack-dev-server`
- HTML template handling using `html-webpack-plugin`
- CSS processing with `style-loader`, `css-loader`, and `html-loader`
- Configuration merging using `webpack-merge`

## Prerequisites
- Node.js (v14 or newer recommended)
- npm (bundled with Node.js) or Yarn

## Dev Dependencies
This project includes the following development dependencies:
- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `html-webpack-plugin`
- `css-loader`
- `html-loader`
- `style-loader`
- `webpack-merge`

## Available Scripts

| Command         | Description                                           |
|-----------------|-------------------------------------------------------|
| `npm run dev`   | Launches a development server with hot module reload |
| `npm run build` | Builds the project for production in the `/dist` folder |

## Project Structure

```
webpack-template/
├── package.json
├── webpack.common.js      # Shared configuration
├── webpack.dev.js         # Development-specific config
├── webpack.prod.js        # Production-specific config
├── src/
│   ├── html
│   │   ├── index.html     # HTML template
│   └── js
│   │   ├── index.html     # App entry point (JS and CSS imports)
└── dist/                  # Generated after build
```

### Configuration Details
- **webpack.common.js**: Contains shared rules and plugins like handling CSS and HTML templates.
- **webpack.dev.js**: Extends the common config, enables the development server, and sets mode to `development`.
- **webpack.prod.js**: Extends the common config and optimizes output for production (e.g., minification).

## Usage

1. **Clone the repo**:
   ```bash
   git clone https://github.com/BASU4100/webpack-template.git
   cd webpack-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

   Open your browser at `http://localhost:8080` (or whichever port is defined) — it auto-reloads on code changes.

4. **Production build**:
   ```bash
   npm run build
   ```

   The optimized output will be available in the `dist/` directory.

## Customization Tips
- Modify HTML by editing `src/index.html` or add new pages using `html-webpack-plugin`.
- Add or adjust loaders (e.g., for SCSS, images) via `webpack.common.js`.
- Extend plugins for optimizations like CSS extraction (via `mini-css-extract-plugin`) or cleaning output directories (`clean-webpack-plugin`).

## License
Licensed under the [MIT License](LICENSE).
