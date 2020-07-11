import React from 'react';
import * as redux from "react-redux";
import moment from "moment";
import { shallow } from "enzyme";
import ExpenseList from "../../../components/ExpenseList/ExpenseList";

const expenses = [
    {
        id: "1",
        description: "Gum",
        note: "",
        amount: 195,
        createdAt: 0
    }, {
        id: "2",
        description: "Rent",
        note: "",
        amount: 108500,
        createdAt: moment(0).subtract(4, "days").valueOf()
    },
    {
        id: "3",
        description: "Credit card",
        note: "",
        amount: 45000,
        createdAt: moment(0).add(4, "days").valueOf()
    }
]



test("should render ExpenseList", () => {

    const spy = jest.spyOn(redux, "useSelector");
    spy.mockReturnValue({
        expenses: [],
        filters: {
            text: "",
            sortBy: "date",
            startDate: undefined,
            endDate: undefined,
        }
    });

    const wrapper = shallow(<ExpenseList />);
    const component = wrapper.find('[data-test="ExpenseList"]')
    expect(component.length).toBe(1)
});