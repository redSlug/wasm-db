# wasm-db
Example of running a db in a web browser. Uses localstorage to write a to write a files name . 

## Run

```bash
# bring up server
npm run dev

python3 -m http.server 
```
Visit
http://localhost:8001/

<img width="816" alt="image" src="https://github.com/user-attachments/assets/3c9c208a-aaa9-485b-986c-19834080996b" />

# Next steps

[OPFS is only available in Worker-thread contexts, not the main UI thread.](https://sqlite.org/wasm/doc/trunk/persistence.md)

Seeing this bug:
```bash
• Ignoring inability to install OPFS sqlite3_vfs: Cannot install OPFS: Missing hook.js: 608
SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to
enable those. See https://sglite.org/wasm/doc/trunk/persistence.md#coop-coep
```
