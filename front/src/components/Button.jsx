export default function Button ({
    type = "button",
    label = "Label",
    callback ,
    disabled = false,
    loading = false,

}) {


    return (
        <button
            disabled={disabled}
            type={type}
            onClick={() => {
                if (callback) callback() ;
            }}
            className={"btn mt-4 btn-primary"}
        >
            {
                loading &&  <span className="loading loading-spinner"></span>
            }
            {label}
        </button>
    )
}