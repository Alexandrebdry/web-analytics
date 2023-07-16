import { useEffect, useState } from "react";
import { updateFunnel } from "../../../services/ConversionFunnelsService";

const FunnelsForm = ({funnel, closeModal, refreshFunnels}) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        await updateFunnel({
            id: funnel.id,
            comment: comment
        });
        closeModal();
        refreshFunnels();
    }

    useEffect(() => {
        if (funnel) {
            setComment(funnel.comment);
        }
    }, [funnel]);

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

export default FunnelsForm;