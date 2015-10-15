import { UrlResolver } from 'angular2/src/core/compiler/url_resolver';
/**
 * Rewrites URLs by resolving '@import' and 'url()' URLs from the given base URL,
 * removes and returns the @import urls
 */
export declare function resolveStyleUrls(resolver: UrlResolver, baseUrl: string, cssText: string): StyleWithImports;
export declare class StyleWithImports {
    style: string;
    styleUrls: string[];
    constructor(style: string, styleUrls: string[]);
}
