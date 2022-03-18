import io from "socket.io-client";

// Example conf. You can move this to your config file.
const host = "https://cloud-messaging.9code.vn/";
const socketPath = "/";

export default class socketAPI {
  socket;
  connect() {
    this.socket = io.connect(host, { path: socketPath });
    return new Promise((resolve, reject) => {
      this.socket.on("connect", () => {
        console.log("Connected");
        return resolve();
      });
      this.socket.on("connect_error", (error) => {
        console.log("error", error);

        return reject(error);
      });
    });
  }
  disconnect() {
    return new Promise((resolve) => {
      this.socket.disconnect(() => {
        this.socket = null;
        resolve();
      });
    });
  }

  emit(event, data) {
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");

      return this.socket.emit(event, data, (response) => {
        // Response is the optional callback that you can use with socket.io in every request. See 1 above.
        if (response.error) {
          console.error(response.error);
          return reject(response.error);
        }

        return resolve();
      });
    });
  }
  on(event, fun) {
    // No promise is needed here, but we're expecting one in the middleware.
    return new Promise((resolve, reject) => {
      if (!this.socket) return reject("No socket connection.");

      this.socket.on(event, fun);
      resolve();
    });
  }
}

//Ref
//https://stackoverflow.com/questions/37876889/react-redux-and-websockets-with-socket-io
