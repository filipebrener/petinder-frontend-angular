import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

    static equalsTo(otherField : string){
        const validator = (formControl: FormControl) => {
            if(otherField == null) {
                throw new Error("É necessário informar o campo.");
            }

            if(!formControl.root || !(<FormGroup>formControl.root).controls){
                return null;
            }

            const field = (<FormGroup>formControl.root).get(otherField)

            if(!field){
                throw new Error("É necessário informar um campo válido")
            }

            if(field.value !== formControl.value){
                return {equalsTo : otherField}
            } else {
                return null
            }
        };
        return validator;
    }


}