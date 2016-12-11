FROM node
MAINTAINER Ruchira (Richie) Jayasekara <ruchira088@gmail.com>

WORKDIR /home/development/
COPY . .

RUN ["npm", "install"]
EXPOSE 8000

CMD ["start"]

ENTRYPOINT ["npm"]