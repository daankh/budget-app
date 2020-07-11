import React from "react";
import { shallow } from "enzyme"
import ExpenseForm from "../../../components/ExpenseForm/ExpenseForm"

test("should render ExpenseFrom component", () => {
    const wrapper = shallow(<ExpenseForm />);
    const component = wrapper.find('[data-test="ExpenseForm"]');
    expect(component.length).toBe(1)
})