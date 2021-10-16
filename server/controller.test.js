const controller = require("./controller")
// @ponicode
describe("controller.getAll", () => {
    test("0", () => {
        let callFunction = () => {
            controller.getAll({ app: { get: () => "v4.0.0-rc.4" } }, { status: () => 200 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            controller.getAll({ app: { get: () => "v4.0.0-rc.4" } }, { status: () => 500 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            controller.getAll({ app: { get: () => "v4.0.0-rc.4" } }, { status: () => 400 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            controller.getAll({ app: { get: () => "v1.2.4" } }, { status: () => 429 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            controller.getAll({ app: { get: () => "v1.2.4" } }, { status: () => 400 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            controller.getAll(undefined, { status: () => Infinity }, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("controller.create", () => {
    test("0", () => {
        let callFunction = () => {
            controller.create({ app: { get: () => "v4.0.0-rc.4" }, body: "Edmond" }, { sendStatus: () => 404, status: () => 400 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            controller.create({ app: { get: () => "1.0.0" }, body: "Edmond" }, { sendStatus: () => 404, status: () => 429 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            controller.create({ app: { get: () => "v4.0.0-rc.4" }, body: "Michael" }, { sendStatus: () => 500, status: () => 500 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            controller.create({ app: { get: () => "4.0.0-beta1\t" }, body: "Pierre Edouard" }, { sendStatus: () => 429, status: () => 404 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            controller.create({ app: { get: () => "^5.0.0" }, body: "Jean-Philippe" }, { sendStatus: () => 500, status: () => 429 }, " ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            controller.create(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
