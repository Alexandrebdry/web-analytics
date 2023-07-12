export default function Input ({
    type = "text",
    label = "Label",
    placeholder = "Type here",
    error = false,
    errorMessage ,
    value ,
    callback ,
    autoComplete = "off"
}) {

    const color = error ? "input-error w-full input input-bordered  max-w-sm" : "input-primary w-full input input-bordered  max-w-sm";

    return (
        <div className={"pt-2 w-full"}>
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                autoComplete={autoComplete}
                type={type}
                value={value}
                onChange={(event) => {
                    if (callback) callback(event.target.value) ;
                }}
                placeholder={placeholder}
                className={color}
            />
            {
                error && errorMessage &&
                <>
                    <label className="label">
                        <span className="label-text-alt">{errorMessage}</span>
                    </label>
                </>
            }
        </div>

    )
}