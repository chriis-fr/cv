import { useState } from "react";
import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";

const Sec3 = () => {
    const [fun, setFun] = useState("")
    function onClick(e){
        e.preventDefault
        setFun(e.target.value)
        alert("submitted")
    }
    return(
        <div className="container pt-5 pb-5 bg-rose-800">
            <Form>
                <FormText>
                    <h1 className="italic">Practical experiences</h1>
                </FormText>
                <FormGroup>
                    <Label for="company name">Company name:</Label>
                    <Input 
                    id="company"
                    name="companyname"
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="company name">Position title:</Label>
                    <Input 
                    id="company"
                    name="companyname"
                    type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="company name">Responsibilities:</Label>
                    <Input 
                    id="company"
                    name="companyname"
                    type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="company name">Company name:</Label>
                    <Input 
                    id="company"
                    name="companyname"
                    type="text"
                    />
                </FormGroup>
            </Form>
            <Button type="submit" onClick={onClick}>Submit</Button>
        </div>
    )
}

export default Sec3;