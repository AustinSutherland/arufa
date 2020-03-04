import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { UserInfo } from "./models";

@Injectable()
export class ArfuaService {
    public loggedInUserInfo$ = new BehaviorSubject<UserInfo>({
        username: null,
        level: null,
        pendingLessons: null,
        pendingReviews: null,
        id: null
    });

    constructor() {}

    public init(): void {
        this.loggedInUserInfo$.next({
            username: "TestUser",
            level: 5,
            pendingLessons: 10,
            pendingReviews: 14,
            id: "we213jk4j2h1hke3w"
        });
    }

    public destroy() {
        // is this needed yet?
    }
}
