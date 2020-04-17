---
id: shell
title: Shell
sidebar_label: Shell
---

## Cleaning up node_modules

```bash
# List size of a sub-folders
du -sh */

# List contents of current folder
du -sh $PWD/*


# Cleaning up node_modules or any other big size folders
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```
