import express from "express";
import livereload from "livereload";
import connectLivereload from "connect-livereload";
import path from "path";

const app = express();
const PORT = 5000;

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(import.meta.url, "src"));

app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(express.static("src"));
app.get("/", (req, res) => {
  res.sendFile("/src/index.html");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
