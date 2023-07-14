import { useState } from "react";
import { createFunnel } from "../../../services/ConversionFunnelsService";

const CreateFunnelForm = ({ closeModal, refreshFunnels }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createFunnel({
            comment: comment
        });
        closeModal();
        refreshFunnels();
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

export default CreateFunnelForm;