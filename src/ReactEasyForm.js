import Form from './Form';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Select from './Select';
import Label from './Label';

if(typeof window !== 'undefined'){
  window.efForm = Form;
  window.efTextInput = TextInput;
  window.efCheckbox = Checkbox;
  window.efSelect = Select;
  window.efLabel = Label;
}

export {
  Form,
  TextInput,
  Checkbox,
  Select,
  Label
};
