# https://github.com/nvm-sh/nvm

NVM-SH_VERSION='v0.40.1'

# If you don't have nvm installed, install it first:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/${NVM-SH_VERSION}/install.sh | bash

# Restart your terminal or run:
source ~/.bashrc  # or source ~/.zshrc if you're using zsh

# Install the latest LTS version of Node.js
nvm install --lts

# Use the newly installed version
nvm use --lts

# Verify the new version
node -v

# Initialize npm if you haven't already
npm init -y

# Install project dependencies locally
npm install marked

# If you have a package.json file with existing dependencies, run:
npm install

# Add node_modules to .gitignore
echo "node_modules/" >> .gitignore

# Commit your changes
git add .
git commit -m "Updated Node.js and added local dependencies"
