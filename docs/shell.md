---
id: shell
title: Shell
sidebar_label: Shell
---

## Cleaning up node_modules

```bash
# List contents of a folder
du -sh $PWD/*
# Remove node_modules recursively
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```
