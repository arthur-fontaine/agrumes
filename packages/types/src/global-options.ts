import type { Tunnel } from '@agrume/tunnel'
import type { RequestOptions } from './request-options'

export type GlobalOptions = {
  getClient?: (
    | (
      (requestOptions: RequestOptions) => (...parameters: unknown[]) => unknown
    )
    | undefined
  )
  logger?: {
    error?: typeof console.error
    info?: typeof console.info
  } | undefined
  prefix?: '/' | `/${string}/`
  skipModules?: RegExp[] | undefined
} & (
  | {
    baseUrl?: `${string}/`
    tunnel?: never | undefined
  }
  | {
    baseUrl?: never | undefined
    tunnel?: {
      [K in Tunnel.TunnelType]: Tunnel.TunnelFlattenOptions<K>
    }[Tunnel.TunnelType]
  }
  )
