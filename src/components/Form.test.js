import {customRender, fireEvent, screen,cleanup, act,} from '../utils/test-utils.js';
import { Form } from './Form';

afterEach(cleanup)

describe("render Form component",()=>{
    it('should render all form elements',async()=>{
        const mockOnSubmit = jest.fn()
        customRender(<Form  />)       
        
        const skillinput = screen.getByTestId('skill')
        const locationinput = screen.getByTestId('location')
        const submitBtn = screen.getByTestId('submit-btn')

        await act(async()=>{
            fireEvent.change(skillinput, {target: {value: 'js' } } )   
            fireEvent.change(locationinput, {target: {value: 'delhi' } } )
        })
        
        await act(async()=>{
            fireEvent.click(submitBtn)
        })

        expect(skillinput.value).toBe('js');
        expect(locationinput.value).toBe('delhi')
        expect(mockOnSubmit)
    })
})

