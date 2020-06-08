import React, {Fragment, Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];

class Home extends Component {
    state = {}
    handleChange = ( e, { value }) => this.setState({ value })
    

    render() {
        const { value }  = this.state
        return (
        
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' />
                    <Form.Input fluid label='Last name' placeholder='Last name' />
                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                    />
                    </Form.Group>
                    <Form.Group inline>
                    <label>Size</label>
                    <Form.Radio
                        label='Small'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Medium'
                        value='md'
                        checked={value === 'md'}
                        onChange={this.handleChange}
                    />
                    <Form.Radio
                        label='Large'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={this.handleChange}
                    />
                    </Form.Group>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>Submit</Form.Button>
                </Form>           
                
          
       
        );
    }
    
}
export default Home;