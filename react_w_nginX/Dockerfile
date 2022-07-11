FROM node 
# AS builder

WORKDIR /app

COPY . .

RUN npm i
# RUN npm run build

# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html

# COPY --from=builder /app/build .

CMD ["npm", "start"]
# CMD ["nginx", "-g", "daemon off;"]