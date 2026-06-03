import { logger } from './logger';

type RequestOptions = {
  headers?: Record<string, string>;
  timeout?: number;
};

type HttpClientConfig = {
  defaultHeaders?: Record<string, string>;
  timeout?: number;
  retries?: number;
};

export class HttpClient {
  private defaultHeaders: Record<string, string>;
  private timeout: number;
  private retries: number;

  constructor(config: HttpClientConfig = {}) {
    this.defaultHeaders = config.defaultHeaders || {};
    this.timeout = config.timeout || 5000;
    this.retries = config.retries ?? 1;
  }

  // ✅ PUBLIC GET
  async get<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>('GET', url, undefined, options);
  }

  // ✅ UNIVERSAL REQUEST (GET/POST/ETC W PRZYSZŁOŚCI)
  private async request<T>(
    method: string,
    url: string,
    body?: any,
    options: RequestOptions = {},
    attempt = 1,
  ): Promise<T> {
    const { headers = {}, timeout = this.timeout } = options;

    try {
      logger.debug('HTTP request', { method, url, attempt });

      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: AbortSignal.timeout(timeout),
      });

      if (!response.ok) {
        const text = await response.text();

        logger.error('HTTP error', {
          method,
          url,
          status: response.status,
          body: text,
        });

        // retry on 5xx
        if (this.shouldRetry(response.status, attempt)) {
          return this.retry(method, url, body, options, attempt);
        }

        throw new Error(`HTTP ${response.status}`);
      }

      return (await response.json()) as T;
    } catch (error: any) {
      logger.error('HTTP request failed', {
        method,
        url,
        attempt,
        error: error?.message || error,
      });

      if (this.shouldRetry(attempt)) {
        return this.retry(method, url, body, options, attempt);
      }

      throw error;
    }
  }

  private shouldRetry(attempt: number, status?: number): boolean {
    if (attempt >= this.retries) return false;

    // retry network errors OR 5xx
    return !status || status >= 500;
  }

  private async retry<T>(
    method: string,
    url: string,
    body: any,
    options: RequestOptions,
    attempt: number,
  ): Promise<T> {
    const delay = 200 * attempt;

    logger.warn('Retrying request', {
      url,
      attempt,
      delay,
    });

    await new Promise((res) => setTimeout(res, delay));

    return this.request<T>(method, url, body, options, attempt + 1);
  }
}
