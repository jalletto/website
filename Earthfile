VERSION 0.6

## Dev Build
dev-build:
  BUILD ./blog+blog-lint
  BUILD --build-arg FLAGS="--future" ./website+website-build 
  BUILD --build-arg FLAGS="--future" ./blog+blog-build

# Prod Build
build:
  BUILD ./blog+blog-lint
  BUILD ./website+website-build 
  BUILD ./blog+blog-build

## Utils
clean:
  LOCALLY
  RUN rm -rf build website/_site website/.sass-cache website/.jekyll-metadata website/.jekyll-cache
  RUN rm -rf build blog/_site blog/.sass-cache blog/.jekyll-metadata blog/.jekyll-cache