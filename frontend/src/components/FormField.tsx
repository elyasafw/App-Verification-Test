interface FormFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    minLength?: number;
    maxLength?: number;
    min?: string;
    required?: boolean;
}

const FormField = ({
    label,
    type,
    value,
    onChange,
    minLength,
    maxLength,
    required = true,
}: FormFieldProps) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
            />
        </div>
    );
};

export default FormField;
