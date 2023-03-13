import { BootstrapInput } from '../BootstrapInput';

const FormControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <BootstrapInput {...rest} />;
        // case 'textarea':
        //   return <Textarea {...rest} />
        case 'select':
            return <SelectItem {...rest} />;
        case 'radio':
            return <RadioButtons {...rest} />;
        case 'checkbox':
            return <CheckBox {...rest} />;
        case 'date':
            return <DatePickerMui {...rest} />;
        case 'MuiInput':
            return <MuiInput {...rest} />;
        default:
            return null;
    }
};
export default FormControl;
