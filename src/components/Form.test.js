import {reducer, fireEvent, screen,cleanup, act,} from '../utils/test-utils.js';
import { Form } from './Form';

afterEach(cleanup)

describe("(Component) Form",()=>{
    it('inputing text updates the state',async()=>{
        const mockOnSubmit = jest.fn()
        const { getByPlaceholderText, getByText }= reducer(<Form  />)       
        
        const skillinput = screen.getByTestId('skill')
        const locationinput = screen.getByTestId('location')
        const submitBtn = screen.getByTestId('submit-btn')

        // expect(getByText(/Change/i).textContent).toBe("Change: ")
        await act(async()=>{
            fireEvent.change(getByPlaceholderText(/skills/i), {target: {value: 'js' } } )   
            fireEvent.change(getByPlaceholderText(/location/i), {target: {value: 'delhi' } } )
        })
        
        await act(async()=>{
            fireEvent.click(submitBtn)
        })

        expect(mockOnSubmit)
    
        // expect(getByText(/Change/i).textContent).not.toBe("Change: ")
    })
})

