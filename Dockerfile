FROM harbordev.se.scb.co.th/library/node:19.0.0-alpine3.16 as build
USER root
RUN mkdir /build
COPY settings.xml /root/.m2/settings.xml
COPY . /build

WORKDIR /build

RUN npm install
RUN npm run build
RUN ls -la /build/
FROM harbordev.se.scb.co.th/library/node:19.0.0-alpine3.16
USER root
COPY --from=build --chown=node:node /build/. /apps/
RUN chmod +x /apps/startup.sh
RUN ls -la /apps
USER node
EXPOSE 3000
ENTRYPOINT ["/apps/startup.sh"]
