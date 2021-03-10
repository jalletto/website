---
layout: post
title: Earthly 0.3.6 Released
date: '2020-09-17 20:58:18'
---

Release Notes:

- introduced `--ssh` flag for `RUN` which allows commands to access the ssh authentication host agent via the socket `$SSH_AUTH_SOCK` (fixes [#292](https://github.com/earthly/earthly/pull/292))
- pass along user terminal environment variable to interactive debugger (fixes [#293](https://github.com/earthly/earthly/pull/293))
- support for in-line comments (fixes [#288](https://github.com/earthly/earthly/pull/288))
- fix autocompletion bug when Earthfile is invalid (fixes [#299](https://github.com/earthly/earthly/pull/299))

Documentation:

[`--ssh` documentation](https://docs.earthly.dev/earthfile#ssh)

[Release Page](https://github.com/earthly/earthly/releases/tag/v0.3.6)
