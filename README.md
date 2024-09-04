# markdown-to-html.js

## Overview

**markdown-to-html.js** is a Node.js script designed to convert [GitHub Flavored Markdown](https://github.github.com/gfm/) (GFM) to F5-DevCentral-friendly HTML, specifically tailored for use with [F5 DevCentral](https://community.f5.com/) technical articles. This script provides a convenient way to prepare your markdown content for publication on F5 DevCentral, ensuring that code blocks are correctly styled and rendered.

The Node.js [**marked**](https://www.npmjs.com/package/marked) package does most of the work under the covers.

## Features

- Converts GitHub Flavored Markdown to HTML
- Transforms code blocks to use DevCentral-specific `<li-code>` elements for proper styling
- Automatically assigns a default language (bash) to code blocks without a specified language
- Preserves the original markdown structure and formatting

## Installation

1. Ensure you have Node.js installed on your system.
2. Clone this repository or download the `markdown-to-html.js` script.
3. Install the required dependencies:

   ```bash
   npm install marked
   ```

## Usage

1. Place your markdown file in the same directory as the script or note its path.
2. Run the script with the following command:

   ```bash
   node markdown-to-html.js input.md output.html
   ```

   Replace `input.md` with the path to your markdown file and `output.html` with the desired output file name.

3. The script will generate an HTML file that you can use as source code for your DevCentral technical article.

## Code Block Handling

GitHub flavored Markdown code blocks with a specified language:
  
````markdown

```python
print("Hello, World!")
```

````

  ...will be converted to: ```<li-code lang="python">print("Hello, World!")</li-code>```
  
Code blocks without a specified language will default to use `bash`. You can modify this default:

  ```javascript
  // Default language for code blocks
  const DEFAULT_LANG = 'bash';
  ```

## DevCentral Integration

After converting your markdown to HTML using this script, you can use the generated HTML as the source code for your DevCentral technical article. This ensures that your content, especially code blocks, will be correctly styled and displayed on the DevCentral platform.

## Support

For any issues or feature requests, please open an issue in this repository or contact the maintainer.

## License

MIT License

Copyright (c) Tony Marfil 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
