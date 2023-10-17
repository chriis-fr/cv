import React from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap'

const Details = () => {
  return (
    <div className=' content-center container bg-orange-800 border rounded content-center '>
    <Form className='f;ex flex-col'>
        <FormText >
            <h1 className='pb-3 pt-3 italic'>General Information:</h1>
        </FormText>
        <FormGroup  >
            <Label for='userName'>Name:</Label>
            <Input 
                id='userName'
                name='name'
                placeholder=''
                type='text'
            />
        </FormGroup>
        <FormGroup >
            <Label for='email'>Email:</Label>
            <Input 
               id='userEmail'
               name='email'
               placeholder=''
               type='email'
            />
        </FormGroup>
        <FormGroup>
            <Label for='phone number'>
                Number:
            </Label>
            <Input 
            id='email'
            name='mobile number'
            placeholder=''
            type='number'
            />
        </FormGroup>
        <Button>
            Submit
        </Button>
    </Form>
    </div>
  )
}

export default Details