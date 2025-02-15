# @agrume/internals

## 3.5.0

### Minor Changes

- 6457bd6: Create skipModules option

### Patch Changes

- Updated dependencies [6457bd6]
  - @agrume/types@3.4.0

## 3.4.0

### Minor Changes

- 0b29353: Create build command in CLI

## 3.3.0

### Minor Changes

- 9007df8: Use polymorphism for tunnels to improve stability (create an `@agrume/tunnel` package at the same time).

### Patch Changes

- Updated dependencies [9007df8]
  - @agrume/types@3.3.0

## 3.2.1

### Patch Changes

- 166b5cd: Fix bad remote URL for Pinggy tunnel.

## 3.2.0

### Minor Changes

- 232bfa1: Removed the small amount of time when the server had no route registered and raised a 404 when watcher was rebuilding the project. Added support for Pinggy (https://pinggy.io) tunnels.

### Patch Changes

- Updated dependencies [232bfa1]
  - @agrume/types@3.2.0

## 3.1.0

### Minor Changes

- c5d4d79: Add support for Ngrok and custom CORS in the CLI.

### Patch Changes

- Updated dependencies [c5d4d79]
  - @agrume/types@3.1.0

## 3.0.0

### Major Changes

- 0dc3cc0: **What's new in Agrume 3?**

  - Custom HTTP error throwing
  - Accept void or undefined as return type
  - Realtime parameter
  - Global client
  - Optimized client
  - Config file for CLI

  See the documentation for more information.

### Patch Changes

- Updated dependencies [0dc3cc0]
  - @agrume/types@3.0.0

## 2.0.0

### Major Changes

- 5fb60e7: - Support for stream/iterable route
  - Agrume CLI
  - Some fixes

### Minor Changes

- 843f053: Add support for tunneling with Bore
- 344d4a0: Add support for tunneling

### Patch Changes

- 034c046: Use HTTP instead of HTTPS when using Bore
- 4ddd7f6: Show errors of Bore tunnel
- Updated dependencies [d144095]
- Updated dependencies [344d4a0]
- Updated dependencies [5fb60e7]
  - @agrume/types@2.0.0

## 2.0.0-beta.5

### Patch Changes

- 4ddd7f6: Show errors of Bore tunnel

## 2.0.0-beta.4

### Patch Changes

- 034c046: Use HTTP instead of HTTPS when using Bore

## 2.0.0-beta.3

### Minor Changes

- 843f053: Add support for tunneling with Bore

## 2.0.0-beta.2

### Minor Changes

- 344d4a0: Add support for tunneling

### Patch Changes

- Updated dependencies [344d4a0]
  - @agrume/types@2.0.0-beta.2

## 2.0.0-beta.1

### Patch Changes

- Updated dependencies [d144095]
  - @agrume/types@2.0.0-beta.1

## 2.0.0-beta.0

### Major Changes

- 5fb60e7: - Support for stream/iterable route
  - Agrume CLI
  - Some fixes

### Patch Changes

- Updated dependencies [5fb60e7]
  - @agrume/types@2.0.0-beta.0
