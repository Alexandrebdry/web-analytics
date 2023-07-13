import { useEffect, useState } from "react";
import { updateTag } from "../../../services/TagsService";

const TagsForm = ({tag, closeModal}) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        updateTag({
            id: tag.id,
            comment: comment
        });
    }

    useEffect(() => {
        if (tag) {
            setComment(tag.comment);
        }
    }, [tag]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Commentaire</span>
                    </label>
                    <input type="text" placeholder="Commentaire" value={comment} onChange={(event) => setComment(event.target.value)} className="input input-bordered"/>
                </div>
            </div>

            <button className="btn btn-primary mt-10">Mettre à jour</button>
        </form>
    );
}

export default TagsForm;