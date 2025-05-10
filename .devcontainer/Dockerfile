FROM node:22-bullseye

# Install required packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    git \
    curl \
    zsh \
    fzf \
    zoxide \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm
RUN npm install -g pnpm

USER node

# Install zoxide
RUN echo 'eval "$(zoxide init bash)"' >> ~/.bashrc 