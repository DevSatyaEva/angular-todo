import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICON_REGISTRY } from '../utils/icon-registry';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private sanitizer: DomSanitizer) {}

  getIcon(name: string): SafeHtml | null {
    console.log(`Loading icon: ${name}`);
    const svg = ICON_REGISTRY[name];
    return svg ? this.sanitizer.bypassSecurityTrustHtml(svg) : null;
  }
}
