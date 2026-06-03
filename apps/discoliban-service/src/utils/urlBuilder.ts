type ParamValue = string | number | boolean | null | undefined;
type ParamEntry = [string, ParamValue];

export class UrlBuilder {
  private url: URL;

  constructor(baseUrl: string, defaults: Record<string, ParamValue> = {}) {
    this.url = new URL(baseUrl);

    Object.entries(defaults).forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        this.url.searchParams.set(k, String(v));
      }
    });
  }

  path(segment: string): this {
    this.url.pathname += `/${segment}`;
    return this;
  }

  set(key: string | ParamEntry[], value?: ParamValue): this {
    if (Array.isArray(key)) {
      key.forEach(([k, v]) => {
        if (v !== undefined && v !== null) {
          this.url.searchParams.set(k, String(v));
        }
      });
    } else {
      if (value !== undefined && value !== null) {
        this.url.searchParams.set(key, String(value));
      }
    }

    return this;
  }

  append(key: string, value: ParamValue): this {
    if (value !== undefined && value !== null) {
      this.url.searchParams.append(key, String(value));
    }
    return this;
  }

  remove(key: string): this {
    this.url.searchParams.delete(key);
    return this;
  }

  build(): string {
    return this.url.toString();
  }

  toString(): string {
    return this.build();
  }
}
