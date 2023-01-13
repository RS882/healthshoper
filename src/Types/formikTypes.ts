
import { FieldHookConfig } from 'formik';

export type InputAttrProps = FieldHookConfig<string> & React.InputHTMLAttributes<HTMLInputElement> & React.ClassAttributes<HTMLInputElement>;
export type SelectAttrProps = FieldHookConfig<string> & React.SelectHTMLAttributes<HTMLSelectElement> & React.ClassAttributes<HTMLSelectElement>;