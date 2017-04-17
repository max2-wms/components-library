import { Field } from './field';
import { InputType } from '../enums/input-type.enum';
import { numberField } from '../interfaces/number-field';

export class NumberField extends Field implements numberField {
    public type: InputType = InputType.number;

    public min?: ( number | string );

    public max?: ( number | string );

    public step?: ( number | string );

    constructor(numberField?: numberField) {
        super(numberField);

        this.min = (numberField.min) ? numberField.min : null;
        this.max = (numberField.max) ? numberField.max : null;
        this.step = (numberField.step) ? numberField.step : null;
    }
}