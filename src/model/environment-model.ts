export interface Host {
  protocol : string,
  hostname : string,
  port     : number
}

export interface EnvConfig {
  environment : string
  host        : Host
}