### Cleaning up node_modules or any other big size folders
```sh
du -sh */
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
```
