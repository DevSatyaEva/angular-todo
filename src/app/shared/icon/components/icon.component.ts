import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconConfig } from '../models/icon-config';
import { IconCategoryType, IconPrefixType } from '../models/icon.model';
import { IconService } from '../services/icon.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges {
  @Input() category!: IconCategoryType;
  @Input() prefix!: IconPrefixType;
  @Input() name!: string;

  @Input() config?: IconConfig;
  @Input() containerClass: string = '';
  @Input() containerStyle: { [key: string]: any } = {};

  icon: SafeHtml | null = null;
  private uniqueClass = 'icon-' + Math.random().toString(36).substring(2, 8);

  constructor(
    private iconService: IconService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    this.applyIconStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.category &&
      this.prefix &&
      this.name &&
      changes['name']?.currentValue
    ) {
      this.icon = this.iconService.getIcon(
        this.category,
        this.prefix,
        this.name
      );
    }
  }

  private applyIconStyles(): void {
    setTimeout(() => {
      const svgEl: SVGElement | null =
        this.el.nativeElement.querySelector('svg');
      if (!svgEl || !this.config) return;

      this.renderer.addClass(svgEl, 'app-icon-svg');
      this.renderer.addClass(svgEl, this.uniqueClass);

      this.setAttr(svgEl, 'stroke', this.config?.stroke);
      this.setAttr(svgEl, 'fill', this.config?.fill);
      this.setAttr(svgEl, 'stroke-width', this.config?.strokeWidth);
      // this.setAttr(svgEl, 'viewBox', this.config?.viewBox);
      // this.setAttr(svgEl, 'role', this.config?.role || 'img');
      // this.setAttr(svgEl, 'aria-label', this.config?.ariaLabel || this.name);
      // this.setAttr(svgEl, 'tabindex', this.config?.tabIndex?.toString());

      this.setStyle(svgEl, 'width', this.config?.width);
      this.setStyle(svgEl, 'height', this.config?.height);
      this.setStyle(svgEl, 'transition', this.config?.transition);

      if (this.config?.customClass) {
        this.renderer.addClass(svgEl, this.config?.customClass);
      }

      this.injectDynamicCss();
    });
  }

  private setAttr(el: Element, attr: string, value?: string) {
    if (value !== undefined) {
      this.renderer.setAttribute(el, attr, value);
    }
  }

  private setStyle(el: Element, styleName: string, value?: string) {
    if (value !== undefined) {
      this.renderer.setStyle(el, styleName, value);
    }
  }

  private injectDynamicCss(): void {
    let css = '';

    const parentSelector = this.config?.parentSelector;
    const hover =
      this.config?.hoverFill ||
      this.config?.hoverStroke ||
      this.config?.hoverScale;
    const active =
      this.config?.activeFill ||
      this.config?.activeStroke ||
      this.config?.activeScale;
    const disabled =
      this.config?.disabledFill ||
      this.config?.disabledStroke ||
      this.config?.disabledScale;

    if (hover) {
      css += `
        .${this.uniqueClass}:hover,
        ${parentSelector}:hover .${this.uniqueClass} {
          ${
            this.config?.hoverFill
              ? `fill: ${this.config?.hoverFill} !important;`
              : ''
          }
          ${
            this.config?.hoverStroke
              ? `stroke: ${this.config?.hoverStroke} !important;`
              : ''
          }
          ${
            this.config?.hoverScale
              ? `transform: scale(${this.config?.hoverScale}) !important;`
              : ''
          }
        }
      `;
    }

    if (active) {
      css += `
         .${this.uniqueClass}:active,
         ${parentSelector}:active .${this.uniqueClass},
         ${parentSelector}.active .${this.uniqueClass},
         ${parentSelector}.show .${this.uniqueClass},
         ${parentSelector}[aria-current="true"] .${this.uniqueClass} {
          ${
            this.config?.activeFill
              ? `fill: ${this.config?.activeFill} !important;`
              : ''
          }
          ${
            this.config?.activeStroke
              ? `stroke: ${this.config?.activeStroke} !important;`
              : ''
          }
           ${
             this.config?.activeScale
               ? `transform: scale(${this.config?.activeScale}) !important;`
               : ''
           }
        }
      `;
    }

    if (disabled) {
      css += `
        .${this.uniqueClass}[disabled],
        .${this.uniqueClass}.disabled,
        ${parentSelector}.disabled ${this.uniqueClass},
        ${parentSelector}[disabled] ${this.uniqueClass} {
          pointer-events: none;
          opacity: 0.6;
          ${
            this.config?.disabledFill
              ? `fill: ${this.config?.disabledFill} !important;`
              : ''
          }
          ${
            this.config?.disabledStroke
              ? `stroke: ${this.config?.disabledStroke} !important;`
              : ''
          }
          ${
            this.config?.disabledScale
              ? `transform: scale(${this.config?.disabledScale}) !important;`
              : ''
          }
        }
      `;
    }

    if (css.trim()) {
      const styleEl = this.renderer.createElement('style');
      styleEl.innerHTML = css;
      this.renderer.appendChild(document.head, styleEl);
    }
  }
}
