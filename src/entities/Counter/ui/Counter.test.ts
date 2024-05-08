// import {componentRender} from "shared/lib/tests/componentRender/componentRender";
// import {fireEvent, screen} from "@testing-library/react";
// import {Counter} from "./Counter";
//
// describe('Counter.test', () => {
//     test('Test render', () => {
//         componentRender(<Counter/>, {
//             initialState: {counter: {value: 10}}
//         });
//         expect(screen.getByTestId('value-title')).toHaveTextContent('value=10');
//     });
//     test('Test increment', () => {
//         componentRender(<Counter />);
//         const incrementBtn = screen.getByTestId('increment-btn');
//         expect(screen.getByTestId('value-title')).toBeInTheDocument();
//         fireEvent.click(incrementBtn);
//         expect(screen.getByTestId('value-title')).toHaveClass('collapsed');
//     });
// });
