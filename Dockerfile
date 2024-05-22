FROM 510467250861.dkr.ecr.us-east-1.amazonaws.com/percipio-base:node-18-alpine
ARG PROJECT_KEY="APO"
LABEL group=$PROJECT_KEY

ENV HOME /home/deploy
ENV NODE_ENV production
WORKDIR $HOME
COPY . $HOME

RUN \
  apk -U --no-cache upgrade && \
  adduser -D -h $HOME deploy && \
  npm install --omit=dev --omit=optional --loglevel=error && \
  chown -R deploy:deploy $HOME

USER deploy

EXPOSE 8080

CMD [ "npm", "start" ]