import { Directive, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true, 
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkfDirective {
    queryParam = input('myapp');

    constructor() {
        console.log('Safe link directive is active')
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('leave the app?');
        if(wantsToLeave) {
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            return;
        }

        event.preventDefault();
    }
}