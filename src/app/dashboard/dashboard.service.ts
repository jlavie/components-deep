import { Injectable } from "@angular/core";
import { dummyTrafficData } from "../data/dummy-dashboard";

@Injectable({providedIn: 'root'})
export class DashboardService {
    private dashboardData = dummyTrafficData;
    private currentStatus = 'online';

    getDashboardData() {
        return this.dashboardData;
    }

    getMaxTraffic() {
        return Math.max(...this.dashboardData.map((data) => data.value));
    }

    getCurrentStatus() {
        return this.currentStatus;
    }
  
}