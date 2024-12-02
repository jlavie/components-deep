import { Injectable, signal } from "@angular/core";
import { dummyTrafficData } from "../data/dummy-dashboard";

@Injectable({providedIn: 'root'})
export class DashboardService {
    private dashboardData = dummyTrafficData;
    private currentStatus = signal<'online' | 'offline' | 'unknown'>('unknown');

    getDashboardData() {
        return this.dashboardData;
    }

    getMaxTraffic() {
        return Math.max(...this.dashboardData.map((data) => data.value));
    }

    getCurrentStatus() {
        return this.currentStatus;
    }

    updateStatus() {
        const rnd = Math.random();
        if(rnd < 0.5) {
            this.currentStatus.set('online');
        } else if(rnd < 0.9) {
            this.currentStatus.set('offline');
        }

        return this.currentStatus;
    }
  
}