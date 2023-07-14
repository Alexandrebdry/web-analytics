import { useState } from "react";
import { createTag } from "../../../services/TagsService";

const CreateTagForm = ({ closeModal, refreshTags }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createTag({
            comment: comment
        });
        closeModal();
        refreshTags();
    }

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
                <button className="btn btn-warning" onClick={closeModal}>Annuler</button>
                <button type="submit" className="btn btn-primary">Créer</button>
            </div>
        </form>
    )
};

export default CreateTagForm;