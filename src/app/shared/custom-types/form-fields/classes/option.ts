import { Field } from './field';
import { option } from '../interfaces/option';
import { field } from '../interfaces/field';

export class Option implements option {
    public value: string;

    public text: string;

    public selected?: boolean = false;

    constructor(option?: option) {
        if (option) {
            this.value = (option.value) ? option.value : null;
            this.text = (option.text) ? option.text : null;
            this.selected = (option.selected) ? option.selected : this.selected;
        }
    }
}