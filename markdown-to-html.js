const fs = require('fs');
const marked = require('marked');
const path = require('path');

// Default language for code blocks
const DEFAULT_LANG = 'bash';

// Custom renderer to handle code blocks
const renderer = new marked.Renderer();

renderer.code = (code, language) => {
  if (typeof code === 'object' && code.text) {
    language = code.lang || language;
    code = code.text;
  }
  
  // If no language is specified, use the default
  language = language || DEFAULT_LANG;
  
  return `<li-code lang="${language}">${escapeHtml(code)}</li-code>`;
};

// Helper function to escape HTML special characters
function escapeHtml(text) {
  if (typeof text !== 'string') {
    console.warn('Unexpected text type in escapeHtml:', typeof text);
    return String(text);
  }
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Configure marked options
marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

// Function to convert markdown to HTML
function convertMarkdownToHtml(markdown) {
  return marked.parse(markdown);
}

// Get input and output file names from command-line arguments
const inputFile = process.argv[2];
const outputFile = process.argv[3] || path.basename(inputFile, path.extname(inputFile)) + '.html';

if (!inputFile) {
  console.error('Please provide an input file name.');
  process.exit(1);
}

// Read markdown from file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Convert markdown to HTML
    const html = convertMarkdownToHtml(data);

    // Write HTML to file
    fs.writeFile(outputFile, html, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log(`Conversion completed. Output saved to ${outputFile}`);
    });
  } catch (error) {
    console.error('Error during conversion:', error);
  }
});
