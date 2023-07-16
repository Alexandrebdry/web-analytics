import { useEffect, useState } from "react";
import { updateTag } from "../../../services/TagsService";

const TagsForm = ({tag, closeModal, refreshTags}) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await updateTag({
            id: tag.id,
            comment: comment
        });
        closeModal();
        refreshTags();
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

            <div className="flex gap-2 mt-10">
                <button type={"button"} className="btn btn-warning" onClick={closeModal}>Annuler</button>
                <button type="submit" className="btn btn-primary">Mettre à jour</button>
            </div>
        </form>
    );
}

export default TagsForm;