export default function Checkbox ({
    label = "Label",
    callback ,
}) {

    return (
        <div className="form-control">
            <label className="label cursor-pointer flex">
                <input
                    type="checkbox"
                    onClick={() => {
                        if (callback) callback() ;
                    }}
                    className="checkbox checkbox-primary mr-2"
                />
                <span className="label-text">{label}</span>
            </label>
        </div>
    )

}