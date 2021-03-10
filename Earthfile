FROM ruby:2.7-alpine
WORKDIR /site

deps:
    RUN apk add --no-cache build-base gcc bash cmake git
    RUN apk --update add imagemagick
    RUN gem install bundler -v "~>1.0" && gem install bundler jekyll

jekyll-install:
    FROM +deps
    COPY src/Gemfile .
    COPY src/Gemfile.lock .
    RUN bundle install --retry 5 --jobs 20

docker:
    FROM +jekyll-install
    CMD RUBYOPT='-W0' bundle exec jekyll serve --incremental -H 0.0.0.0 -P 4001
    SAVE IMAGE earthly-website

run:
  LOCALLY
  BUILD +docker
  RUN docker run -p 4001:4001 -v $(pwd)/src:/site earthly-website

clean:
  LOCALLY
  RUN rm -r src/_site || True

shell: 
  LOCALLY    
  BUILD +docker
  RUN --interactive docker run -p 4001:4001 -v $(pwd)/src:/site -it --entrypoint=/bin/bash earthly-website