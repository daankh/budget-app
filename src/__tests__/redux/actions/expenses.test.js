import { v4 as uuidv4 } from "uuid";
import { addExpense, removeExpense, editExpense } from "../../../redux/actions/expenses"

describe("should setup add expense action object", () => {
    let id = null;
    beforeEach(
        () => { id = uuidv4(); }
    )
    test("with default values", () => {
        const action = addExpense()
        expect(action).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                description: "",
                note: "",
                amount: 0,
                createdAt: 0,
            },
        })
    })
    test("with provided values", () => {
        const expenseData = {
            description: "Rent",
            amount: 1024,
            createdAt: 1000,
            note: "this was last month"
        }
        const action = addExpense(expenseData)
        expect(action).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData,
            },
        })
    })
})


test("should setup remove expense action object", () => {
    const result = removeExpense({ id: "1234" })
    expect(result).toEqual({ type: "REMOVE_EXPENSE", id: "1234" })
})

test("should setup edit expense action object", () => {
    const id = "1234"
    const updates = {
        note: "new note",
    }
    const result = editExpense(id, updates);
    expect(result).toEqual({
        type: "EDIT_EXPENSE",
        id: "1234",
        updates: {
            note: "new note"
        }
    })
})