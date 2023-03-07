import Form from 'react-bootstrap/Form';

function SelectBasicExample({ state, action, items, mainOption }) {
    return (
        <Form.Select
            isInvalid={state}
            aria-label="Default select example"
            onClick={(e) => {
                console.log(e.target.value);
                action(e.target.value);
            }}
        >
            <option value={mainOption} key={mainOption}>
                {mainOption}
            </option>
            {items?.map((item, id) => {
                return (
                    <option value={item.key} key={id}>
                        {item.value}
                    </option>
                );
            })}
        </Form.Select>
    );
}

export default SelectBasicExample;
