---
layout: blog
title: v0.3.2 Released
date: '2020-08-25 18:12:00'
tags:
- news
---

Changes

- **New** Bash autocompletion. [Installation](https://github.com/earthly/earthly#bash-autocompletion-). ( **experimental** )
- **New** Docker operations no longer affected by disk performance issues. Requires use of new `WITH DOCKER` syntax. See [Docs](https://docs.earthly.dev/earthfile#with-docker-experimental) and an [Example](https://github.com/earthly/earthly/blob/master/examples/tests/docker-load.earth). ( **experimental** )
- Support for building dockerfiles which are generated inside earthly targets, e.g. `FROM DOCKERFILE +gen-dockerfile/` [#219](https://github.com/earthly/earthly/issues/219)
- Support for COPY --chown [#224](https://github.com/earthly/earthly/pull/224)
- Fixes EARTHLY\_SECRETS environment variable not working [#229](https://github.com/earthly/earthly/issues/229)
- Fixes failure output not always being printed
- Fixes support for parallel docker-in-docker

Upgrading

- Upgrading from `0.3.x`

    earth prune --reset

[Release Page](https://github.com/earthly/earthly/releases/tag/v0.3.2)
