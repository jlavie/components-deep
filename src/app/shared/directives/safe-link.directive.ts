import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true, 
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkfDirective {
    queryParam = input('myapp');
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
        console.log('Safe link directive is active')
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('leave the app?');
        if(wantsToLeave) {
            // const address = (event.target as HTMLAnchorElement).href;
            // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
        }

        event.preventDefault();
    }
}