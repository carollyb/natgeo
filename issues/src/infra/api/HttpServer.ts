export default interface HttpServer {
  on (method: string, url: string, callback: Function): void
  listen (port: string | undefined): void
}