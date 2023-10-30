import User from "./User"
import {v4} from "uuid"

describe("User model", () => {
    it("should preserve Id if passed in the ctor",() => {
        let userId = "user.id"
        let user = new User(userId);
        expect(user.id).toBe(userId);
    })
    
    it("should produce an User object with empty name by default", () => {
        expect(new User().name).toBe('');
    })
    
    it("should produce User object with a v4 id if id is not passed.", () => {
        let user = new User();
        expect(user.id).not.toBeFalsy();
    })
})