import React from "react";
import { shallow } from "enzyme";
import App from "../App";

test("should render AppRouter component", () => {
    const wrapper = shallow(<App />)
    const component = wrapper.find('[data-test="AppRouter"]')
    expect(component.length).toBe(1)
})