import {sliceToNumber} from './helper/sliceToNumber'
import {numberSlicer} from './helper/numberSlicer'

import axios from 'axios'
import SignIn from "./Components/Signup/SignIn"
// import {fireEvent} from "@testing-library/dom";

describe('helpers', function () {
    test("sliceToNumbers", () => {
        let x = "1,222"
        expect(sliceToNumber(x)).toEqual(1222)
    })

    test("numberSlicer", () => {
        let x = "12345"
        expect(numberSlicer(x)).toEqual("12,345")
    })
});

describe('SignIn and SignUp', function () {
    // test('valid input', () => {
    //     const { getByRole, getByText } = render(<SignIn />);
    //
    //     const inputField = getByRole('phoneNumber');
    //     fireEvent.change(inputField, { target: { value: '231' } });
    //
    //     const submitButton = getByText('ورود/عضویت');
    //     fireEvent.click(submitButton);
    // });
})