import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmarSenhaValidator : ValidatorFn = (group: AbstractControl) : ValidationErrors | null => {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;

    if(senha !== confirmarSenha){
        return { senhasDiferentes: true };
    }
    
    return null;
};