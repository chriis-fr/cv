import { Form, FormGroup, FormText, Label, Input, Button } from "reactstrap";

const Details2 = () => {
    return(
        <div className="container content-center  bg-orange-800 border rounded content-center">
            <Form>
                <FormText>
                    <h1 className="pb-3 pt-3 italic">Educational Experiences:</h1>
                </FormText>
                <FormGroup>
                    <Label for="educational experience">School:</Label>
                    <Input 
                        id="schoolname"
                        name="school"
                        type="text"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="educational experience">Course:</Label>
                    <Input 
                        id="schoolname"
                        name="school"
                        type="text"
                        />
                </FormGroup>
                <FormGroup>
                    <Label for="educational experience">Date started:</Label>
                    <Input 
                        id="schoolname"
                        name="school"
                        type="date"
                        />
                </FormGroup>
                <Button>
                    Done
                </Button>
            </Form>
        </div>
    )
}

export default Details2;