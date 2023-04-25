import React, {
    forwardRef,
    useEffect,
    useRef,
    InputHTMLAttributes,
} from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
}

export default forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref
        ? (ref as React.MutableRefObject<HTMLInputElement>)
        : useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isFocused) {
            input.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
