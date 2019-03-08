FROM node:latest

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install
COPY . .

# Expose development server
EXPOSE 3000

# Expose Storybook
EXPOSE 9009

CMD (yarn storybook --ci --host 0.0.0.0 &) && \
    yarn start --ci --host 0.0.0.0
