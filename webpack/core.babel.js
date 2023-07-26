/**
 * @prettier
 */

import configBuilder from "./_config-builder"

const result = configBuilder(
  {
    minimize: true,
    mangle: true,
    sourcemaps: true,
    includeDependencies: false,
  },
  {
    entry: {
      "swagger-ui": [
        "./src/App.js",
      ],
    },

    output: {
      globalObject: "this",
      library: {
        name: "SwaggerUICore",
        export: "default",
      },
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                ]
            }
        ]      
    }
  }
)

export default result