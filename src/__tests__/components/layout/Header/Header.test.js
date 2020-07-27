import React from "react";
import { shallow } from "enzyme";
import Header from "../../../../components/layout/Header/Header";
import { NavLink } from "react-router-dom"
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => ({
        dispatch: jest.fn()
    })
}));

test("should render Header component", () => {
    const wrapper = shallow(<Header />)
    const component = wrapper.find('[data-test="Header"]')
    expect(component.length).toBe(1)
})

describe("Heading", () => {
    let wrapper = null;
    let component = null;
    beforeEach(() => {
        wrapper = shallow(<Header />)
        component = wrapper.find('[data-test="heading"]')
    })

    test("should render h1", () => {
        expect(component.length).toBe(1)
    })

    test("h1 should have correct text", () => {
        const expectedText = "Expensify";
        expect(component.text()).toBe(expectedText)
    })
})



test("should render navigation", () => {
    const wrapper = shallow(<Header />)
    const component = wrapper.find('[data-test="navigation"]')
    expect(component.length).toBe(1)
})

test("should render 2 NavLinks", () => {
    const wrapper = shallow(<Header />)
    const component = wrapper.find(NavLink)
    expect(component.length).toBe(2)
})

describe("NavLink to dashboard", () => {
    let wrapper = null;
    let component = null;

    beforeEach(() => {
        wrapper = shallow(<Header />)
        component = wrapper.find('[data-test="link-dashboard"]')
    })

    test("should render NavLinkt to dashboard", () => {
        expect(component.length).toBe(1)
    })

    test("NavLink to dashboard should have correct text", () => {
        const expectedText = "Dashboard"
        expect(component.text()).toBe(expectedText)
    })

    test("should have correct to param", () => {
        const expectedTo = "/dashboard"
        expect(component.prop("to")).toBe(expectedTo)
    })
})

describe("NavLink to edit page", () => {
    let wrapper = null;
    let component = null;
    beforeEach(() => {
        wrapper = shallow(<Header />)
        component = wrapper.find('[data-test="link-create-expense"]')
    })

    test("should render NavLinkt to dashboard", () => {

        expect(component.length).toBe(1)
    })

    test("NavLink to edit page should have correct text", () => {
        const expectedText = "Create Expense"
        expect(component.text()).toBe(expectedText)
    })

    test("should have correct to param", () => {
        const expectedTo = "/create"
        expect(component.prop("to")).toBe(expectedTo)
    })
})

// describe("NavLink to help page", () => {
//     let wrapper = null;
//     let component = null;
//     beforeEach(() => {
//         wrapper = shallow(<Header />)
//         component = wrapper.find('[data-test="link-help"]')
//     })

//     test("should render NavLinkt to help page", () => {
//         expect(component.length).toBe(1)
//     })

//     test("NavLink to help page should have correct text", () => {
//         const expectedText = "Help"
//         expect(component.text()).toBe(expectedText)
//     })

//     test("should have correct to param", () => {
//         const expectedTo = "/help"
//         expect(component.prop("to")).toBe(expectedTo)
//     })
// })

describe("Logout button", () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    })

    test("should render logout button", () => {
        const logoutButton = wrapper.find('[data-test="logout-button"]');
        expect(logoutButton.length).toBe(1);
    });


})