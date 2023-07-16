import { useState, useEffect } from "react";
import { findTags } from "../../../services/TagsService";
import { createFunnel } from "../../../services/ConversionFunnelsService";

const CreateTagForm = ({ closeModal, refreshFunnels }) => {
    const [availableTags, setAvailableTags] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    const getTags = async () => {
        const response = await findTags();
        if (response) {
            setAvailableTags(response);
        }
    }

    const handleChangeTags = (event) => {
        const options = event.target.options;
        const value = [];

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                value.push(parseInt(options[i].value));
            }
        }

        setTags(value);
    }

    const [comment, setComment] = useState('');
    const [tags, setTags] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await createFunnel({
            comment: comment,
            tags: tags
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
                
                <div className="form-control mx-2">
                    <label className="label">
                        <span className="label-text label-sm">Tags</span>
                    </label>
                    <select multiple={true} value={tags} onChange={handleChangeTags} className="select select-bordered w-full">
                        {
                            availableTags.map((tag) => {
                                return <option key={tag.id} value={tag.id}>{tag.comment}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            
            <div className="flex gap-2 mt-10">
                <button type={"button"} className="btn btn-warning" onClick={closeModal}>Annuler</button>
                <button type="submit" className="btn btn-primary">Créer</button>
            </div>
        </form>
    )
};

export default CreateTagForm;