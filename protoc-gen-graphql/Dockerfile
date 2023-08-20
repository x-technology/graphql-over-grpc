FROM node

WORKDIR /protoc-gen-graphql

ARG PROTOC_VERSION=24.1
ENV VERSION=$PROTOC_VERSION

ENV PROTOC_ZIP=protoc-${VERSION}-linux-x86_64.zip
RUN echo $PROTOC_ZIP
RUN echo $VERSION
RUN curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v${VERSION}/$PROTOC_ZIP \
  && unzip -o $PROTOC_ZIP -d /usr/local bin/protoc \
  && unzip -o $PROTOC_ZIP -d /usr/local 'include/*' \
  && rm -f $PROTOC_ZIP

COPY package* ./
RUN npm install
COPY . ./
RUN npm install -g .