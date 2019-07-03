FROM node:10.15.3

WORKDIR /usr/src/face-detect-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]