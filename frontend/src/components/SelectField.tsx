interface Option {
    value: string;
    label: string;
}

interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    required?: boolean;
}

const SelectField = ({ label, value, onChange, options, required = true }: SelectFieldProps) => {
    return (
        <div>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)} required={required}>
                <option value="" disabled></option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
